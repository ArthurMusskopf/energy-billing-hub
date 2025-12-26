import os, uuid
from datetime import datetime
from typing import List

from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

UPLOAD_DIR = os.environ.get("UPLOAD_DIR", "/data/uploads")

app = FastAPI(title="Energy Billing Hub API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"ok": True, "time": datetime.utcnow().isoformat()}

@app.post("/api/v1/faturas/parse")
async def parse_faturas(files: List[UploadFile] = File(...)):
    if not files:
        raise HTTPException(status_code=400, detail="Envie ao menos 1 arquivo em files[]")

    batch_id = str(uuid.uuid4())
    batch_dir = os.path.join(UPLOAD_DIR, batch_id)
    os.makedirs(batch_dir, exist_ok=True)

    saved = []
    for f in files:
        if f.content_type != "application/pdf":
            raise HTTPException(status_code=400, detail=f"Arquivo {f.filename} não é PDF")

        file_id = str(uuid.uuid4())
        out_path = os.path.join(batch_dir, f"{file_id}__{f.filename}")
        content = await f.read()

        with open(out_path, "wb") as fp:
            fp.write(content)

        saved.append({
            "file_id": file_id,
            "filename": f.filename,
            "storage_path": out_path,
            "size_bytes": len(content),
            "parse_status": "uploaded"
        })

    return {
        "batch_id": batch_id,
        "summary": {"files_received": len(saved)},
        "files": saved,
        "faturas": []
    }

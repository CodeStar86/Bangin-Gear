
import os, re, pathlib

BASE = pathlib.Path(__file__).resolve().parents[1]

def test_index_exists():
    assert (BASE / "index.html").exists(), "index.html should exist at project root"

def test_local_assets_exist():
    # Scan for root-absolute asset references like "/x.png"
    exts = (".html",".css",".js",".ts",".tsx",".jsx")
    missing = []
    for p in BASE.rglob("*"):
        if p.suffix.lower() in exts:
            txt = p.read_text(encoding="utf-8", errors="ignore")
            for m in re.finditer(r"['\"](/[^'\"]+\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|mp3|woff2?|ttf|otf|pdf))['\"]", txt):
                asset = m.group(1)
                public_path = BASE / "public" / asset.lstrip("/")
                root_path = BASE / asset.lstrip("/")
                if not public_path.exists() and not root_path.exists():
                    missing.append(f"{p.name}: missing asset {asset}")
    assert not missing, "Missing assets: " + "; ".join(missing)

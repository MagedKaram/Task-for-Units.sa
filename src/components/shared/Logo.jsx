function Logo() {
    return (
        <div className="d-flex align-items-center gap-2 ">
            <div
                className="bg-dark rounded d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32 }}
            >
                <span className="text-white fw-bold" style={{ fontSize: 14 }}>✕</span>
            </div>
            <span className="fw-semibold fs-5">
                <span className="fw-bold">Sugar</span>panel
            </span>
        </div>
    )
}

export default Logo
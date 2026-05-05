function PromoCard() {
    return (
        <div
            className="p-3 flex-grow-1 position-relative overflow-hidden"
            style={{
                borderRadius: 16,
                background: 'linear-gradient(135deg, #4A90E2, #1565C0)',
                minWidth: 220,
                minHeight: 140,
            }}
        >
            <p className="text-white fw-semibold mb-3" style={{ fontSize: 14, lineHeight: 1.3 }}>
                Sharpen your Skill with<br />Professional Online
            </p>
            <button
                className="btn btn-dark"
                style={{ fontSize: 12, borderRadius: 20, padding: '6px 16px' }}
            >
                Upgrade Now
            </button>

            {/* Decorative element */}
            <div
                className="position-absolute"
                style={{
                    right: -20,
                    bottom: -20,
                    width: 100,
                    height: 100,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                }}
            />
        </div>
    )
}

export default PromoCard
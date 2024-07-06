import React from 'react';

const FooterCredit = () => {
    return (
        <div className="container-fluid text-secondary py-4" style={{ background: '#111111' }}>
            <div className="container text-center">
                <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.
                    Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
        </div>
    );
}

export default FooterCredit;
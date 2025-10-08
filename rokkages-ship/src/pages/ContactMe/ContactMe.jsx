export default function ContactMe() {
    return (
        <div className="hero bg-base-200 min-h-screen">
              <div className="hero-overlay"></div>

            <div className="hero-content flex-col lg:flex-row">
                <div className="rounded-xl border-2 border-base-300 p-8 bg-base-100 shadow-md">
                    <h1 className="text-5xl font-bold">Contact Me</h1>
                    <p className="py-6 underline">
                        <a href="mailto:elijahiya1204@gmail.com">elijahiya1204@gmail.com</a>
                    </p>
                    <p className="py-1 underline">
                        <a href="https://www.linkedin.com/in/elijah-smith-71319429a" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
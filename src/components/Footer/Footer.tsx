import logo from "../../assets/sielata_ico.png";

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center gap-4">
                <img
                    src={logo}
                    alt="SieLata"
                    className="w-10 h-10"
                />

                <span className="font-semibold">
                    SieLata
                </span>

                <span className="text-slate-300">
                    © {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
}
import { Link } from 'react-router-dom';
import logo_white from '../assets/img/logo_white.png';
 
function Footer() {
    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Men's Collection", to: "/men" },
        { label: "Women's Collection", to: "/women" },
        { label: "New Arrivals", to: "/new" },
        { label: "About Us", to: "/about" },
        { label: "Contact", to: "/contact" },
    ];
 
    const socials = [
        { icon: "fa-facebook-f", href: "#", label: "Facebook" },
        { icon: "fa-instagram", href: "#", label: "Instagram" },
        { icon: "fa-tiktok", href: "#", label: "TikTok" },
        { icon: "fa-pinterest-p", href: "#", label: "Pinterest" },
    ];
 
    const badges = [
        { value: "★ 4.9", label: "Rating" },
        { value: "12K+", label: "Clients" },
        { value: "100%", label: "Authentic" },
    ];
 
    const essenceItems = [
        "Luxury Fragrances",
        "Worldwide Delivery",
        "100% Authentic",
        "Free Returns",
        "Secure Checkout",
    ];
 
    return (
        <footer className="relative overflow-hidden pt-20 bg-[#080009] text-white">
 
            {/* ── Top Divider Glow ── */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
 
            {/* ── Aurora Background Glows ── */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute -bottom-32 -right-20 w-[450px] h-[450px] rounded-full bg-violet-700/8 blur-[100px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] rounded-full bg-fuchsia-600/5 blur-[80px]" />
            </div>
 
            <div className="relative z-10 max-w-[1100px] mx-auto px-8">
 
                {/* ── Subscribe Band ── */}
                <div className="flex flex-col items-center gap-7 pb-16 border-b border-white/[0.06]">
                    <p className="text-[10px] tracking-[3px] uppercase text-purple-300/50 font-light">
                        Exclusive Member Benefits
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center leading-snug tracking-wide"
                        style={{ background: 'linear-gradient(135deg, #e8c4ff 0%, #c084fc 40%, #a855f7 70%, #d4a8ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Subscribe &amp; receive{' '}
                        <span style={{ background: 'linear-gradient(135deg, #f5d97a, #e8b84b, #f5d97a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            10% off
                        </span>
                        <br className="hidden md:block" />
                        your first order
                    </h2>
 
                    <div className="flex items-center w-full max-w-[520px] bg-white/[0.04] border border-purple-500/25 rounded-full pl-6 pr-1.5 py-1.5 focus-within:border-fuchsia-500/50 focus-within:shadow-[0_0_0_4px_rgba(218,35,255,0.08),0_0_30px_rgba(218,35,255,0.12)] transition-all duration-300">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="!flex-1 !bg-transparent !border-none !outline-none !text-white !text-sm !font-light !tracking-wide placeholder-white/30"
                        />
                        <button className="bg-gradient-to-br from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white px-7 py-3 rounded-full text-[11px] font-medium tracking-[1.5px] uppercase transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(147,51,234,0.35)]">
                            Subscribe
                        </button>
                    </div>
                </div>
 
                {/* ── Main Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 py-16 border-b border-white/[0.06]">
 
                    {/* Logo & About */}
                    <div>
                        {/* Replace with your logo image if desired */}
                        <div className="text-4xl font-bold tracking-[6px] uppercase mb-1 font-serif"
                             style={{ background: 'linear-gradient(135deg, #f5d97a 0%, #e8b84b 50%, #f5d97a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            M.
                        </div>
                        <p className="text-[10px] tracking-[4px] uppercase text-purple-300/40 font-light mb-5">
                            Maison de Parfum
                        </p>
                        <p className="text-[13.5px] leading-[1.9] text-white/40 font-light tracking-wide">
                            A curated collection of rare and exquisite fragrances, crafted for those who appreciate the art of scent. Every bottle tells a story of luxury, heritage, and refined elegance.
                        </p>
                        {/* Trust Badges */}
                        <div className="flex gap-4 mt-6">
                            {badges.map(({ value, label }) => (
                                <div key={label} className="flex flex-col items-center gap-1 bg-white/[0.03] border border-purple-300/10 rounded-xl px-3.5 py-2.5">
                                    <span className="text-base font-bold"
                                          style={{ background: 'linear-gradient(135deg, #f5d97a, #e8b84b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                        {value}
                                    </span>
                                    <span className="text-[9px] tracking-[2px] uppercase text-white/25 font-light">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
 
                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-base font-semibold tracking-wide text-purple-200/90 mb-1.5">Get in Touch</h3>
                        <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent mb-6" />
 
                        {[
                            { icon: 'fa-phone', label: 'Call Us', value: '031212 30283', href: 'tel:03121230283' },
                            { icon: 'fa-envelope', label: 'Email Us', value: 'hello@mperfume.com', href: 'mailto:hello@mperfume.com' },
                            { icon: 'fa-map-marker-alt', label: 'Visit Us', value: 'Karachi, Pakistan', href: '#' },
                        ].map(({ icon, label, value, href }) => (
                            <a key={label} href={href}
                               className="!flex !items-center !gap-3.5 !p-3.5 !rounded-xl !border !border-white/[0.04] !bg-white/[0.02] !mb-2.5 !no-underline !transition-all !duration-300 group hover:!bg-purple-900/10 hover:!border-purple-400/20 hover:!translate-x-1">
                                <div className="w-10 h-10 rounded-[10px] bg-purple-600/15 border border-purple-400/20 flex items-center justify-center text-purple-300 text-[14px] flex-shrink-0 transition-all duration-300 group-hover:bg-purple-600/25 group-hover:shadow-[0_0_12px_rgba(192,132,252,0.2)]">
                                    <i className={`fas ${icon}`} />
                                </div>
                                <div>
                                    <span className="block text-[9px] tracking-[2px] uppercase text-white/25 font-light">{label}</span>
                                    <span className="block text-[13px] text-white/65 mt-0.5">{value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
 
                    {/* Nav Links */}
                    <div>
                        <h3 className="font-serif text-base font-semibold tracking-wide text-purple-200/90 mb-1.5">Navigate</h3>
                        <div className="w-8 h-px bg-gradient-to-r from-amber-400 to-transparent mb-6" />
                        <nav className="flex flex-col gap-0">
                            {navLinks.map(({ label, to }) => (
                                <Link key={label} to={to}
                                      className="!flex !items-center !justify-between !py-2.5 !border-b !border-white/[0.04] last:!border-b-0 !text-white/40 !text-[13.5px] !font-light !tracking-wide !no-underline !transition-all !duration-300 group hover:!text-purple-300 hover:!pl-1.5">
                                    <span>{label}</span>
                                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400 text-[11px]">→</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
 
                </div>
 
                {/* ── Bottom Bar ── */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between py-7 gap-5 flex-wrap">
                    <p className="text-[11px] tracking-[0.08em] text-white/20 font-light">
                        © 2026{' '}
                        <span style={{ background: 'linear-gradient(135deg, #f5d97a, #e8b84b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                              className="font-medium">
                            M. Perfume
                        </span>
                        . All rights reserved.
                    </p>
 
                    <div className="flex gap-5">
                        {['Privacy', 'Terms', 'Shipping'].map(item => (
                            <a key={item} href="#"
                               className="!text-[10px] !tracking-[1.5px] !uppercase !text-white/20 !no-underline !transition-colors !duration-300 hover:!text-purple-300/60">
                                {item}
                            </a>
                        ))}
                    </div>
 
                    <div className="flex gap-2.5">
                        {socials.map(({ icon, href, label }) => (
                            <a key={label} href={href} aria-label={label}
                               className="!w-10 !h-10 !rounded-[10px] !border !border-white/[0.08] !bg-white/[0.03] !flex !items-center !justify-center !text-white/35 !text-[14px] !no-underline !transition-all !duration-300 hover:!text-white hover:-translate-y-[3px] hover:!shadow-[0_8px_20px_rgba(124,58,237,0.3)]"
                               style={{}}>
                                <i className={`fab ${icon}`} />
                            </a>
                        ))}
                    </div>
                </div>
 
                {/* ── Essence Strip ── */}
                <div className="flex justify-center flex-wrap gap-8 py-5 border-t border-white/[0.04]">
                    {essenceItems.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[10px] tracking-[2.5px] uppercase text-white/18 font-light">
                            <div className="w-1 h-1 rounded-full"
                                 style={{ background: 'linear-gradient(135deg, #f5d97a, #e8b84b)' }} />
                            {item}
                        </div>
                    ))}
                </div>
 
            </div>
        </footer>
    );
}
 
export default Footer;
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hành Trình Ánh Sáng — Vương Quốc Ánh Sáng 5D" },
      {
        name: "description",
        content:
          "Một hành trình trở về với Ánh Sáng bên trong — Thức tỉnh, Chữa lành, Sáng tạo, Phụng sự, Hợp nhất.",
      },
      {
        property: "og:title",
        content: "Hành Trình Ánh Sáng — Vương Quốc Ánh Sáng 5D",
      },
      {
        property: "og:description",
        content:
          "Thức tỉnh • Chữa lành • Sáng tạo • Phụng sự • Hợp nhất — Vương Quốc Ánh Sáng 5D.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const NAV = [
  { label: "Vương Quốc", href: "#vuong-quoc" },
  { label: "Hành Trình", href: "#hanh-trinh" },
  { label: "Bản Đồ", href: "#ban-do" },
  { label: "Cộng Đồng", href: "#cong-dong" },
  { label: "Thư Viện", href: "#thu-vien" },
  { label: "Sự Kiện", href: "#su-kien" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <VuongQuoc />
        <HanhTrinh />
        <BanDo />
        <CongDong />
        <ThuVien />
        <FunCosmos />
        <SuKien />
        <SanPham />
        <CauChuyen />
        <ThamGia />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-[color-mix(in_oklab,var(--accent)_40%,transparent)] py-3"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#trang-chu" className="group flex items-center gap-2">
          <span className="text-lg leading-none">✨</span>
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground sm:text-xl">
            Hành Trình Ánh Sáng
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="story-link text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#tham-gia"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            Bắt Đầu
          </a>
        </nav>

        <button
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Mở menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="glass-card mt-3 mx-3 flex flex-col gap-1 rounded-2xl p-4 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent/40 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#tham-gia"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
          >
            Bắt Đầu
          </a>
        </nav>
      )}
    </header>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      {children}
    </p>
  );
}

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-transform hover:scale-105";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
      : "glass-card text-foreground";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="trang-chu"
      className="aurora-bg relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-32 text-center scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-[oklch(0.82_0.1_300)]/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl animate-fade-in">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Vương Quốc Ánh Sáng 5D
        </p>
        <h1 className="font-serif text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
          <span className="gradient-text">HÀNH TRÌNH</span>
          <br />
          <span className="gradient-text">ÁNH SÁNG</span>
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          Một hành trình trở về với Ánh Sáng bên trong, nơi mỗi con người có thể
          yêu thương, chữa lành, sáng tạo và cùng nhau kiến tạo một thế giới tốt
          đẹp hơn.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href="#tham-gia">🌟 BẮT ĐẦU HÀNH TRÌNH</CTAButton>
          <CTAButton href="#vuong-quoc" variant="ghost">
            ▶️ KHÁM PHÁ VƯƠNG QUỐC
          </CTAButton>
        </div>
        <div className="mt-12 text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
          Thức tỉnh • Chữa lành • Sáng tạo • Phụng sự • Hợp nhất
        </div>
      </div>

      <a
        href="#vuong-quoc"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-primary/60 animate-bounce"
        aria-label="Cuộn xuống"
      >
        ↓
      </a>
    </section>
  );
}

function VuongQuoc() {
  const values = [
    {
      icon: "❤️",
      title: "TÌNH YÊU",
      desc: "Yêu thương chính mình và muôn loài",
    },
    {
      icon: "🌿",
      title: "CHỮA LÀNH",
      desc: "Trở về với sự bình an bên trong",
    },
    {
      icon: "🎨",
      title: "SÁNG TẠO",
      desc: "Biến ý tưởng thành giá trị",
    },
    {
      icon: "🤝",
      title: "PHỤNG SỰ",
      desc: "Tạo giá trị cho cộng đồng",
    },
    {
      icon: "♾️",
      title: "HỢP NHẤT",
      desc: "Cùng nhau xây dựng tương lai",
    },
  ];

  return (
    <Section id="vuong-quoc" className="bg-background">
      <div className="text-center">
        <Eyebrow>Vương Quốc Ánh Sáng 5D</Eyebrow>
        <SectionTitle className="mx-auto max-w-2xl">
          CHÀO MỪNG ĐẾN VỚI{" "}
          <span className="gradient-text">VƯƠNG QUỐC ÁNH SÁNG</span>
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Một thế giới được hình dung dựa trên những giá trị:
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {values.map((v) => (
          <div
            key={v.title}
            className="glass-card hover-scale rounded-2xl p-7 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/60 to-primary/30 text-2xl">
              {v.icon}
            </div>
            <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
              {v.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function HanhTrinh() {
  const steps = [
    {
      n: "01",
      title: "THỨC TỈNH",
      desc: "Nhận ra giá trị và tiềm năng bên trong.",
    },
    {
      n: "02",
      title: "THANH LỌC",
      desc: "Buông bỏ những điều không còn phục vụ hành trình.",
    },
    {
      n: "03",
      title: "KẾT NỐI",
      desc: "Kết nối với chính mình, cộng đồng và những giá trị cao đẹp.",
    },
    {
      n: "04",
      title: "KIẾN TẠO",
      desc: "Biến tình yêu và sáng tạo thành những giá trị thực tế.",
    },
    {
      n: "05",
      title: "PHỤNG SỰ",
      desc: "Cùng nhau tạo nên những điều tốt đẹp cho xã hội.",
    },
  ];

  return (
    <Section id="hanh-trinh" className="bg-secondary/40">
      <div className="text-center">
        <Eyebrow>Hành Trình Của Bạn</Eyebrow>
        <SectionTitle>
          5 BƯỚC <span className="gradient-text">BƯỚC VÀO ÁNH SÁNG</span>
        </SectionTitle>
      </div>

      <div className="mt-16 relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent via-primary/40 to-transparent md:block" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`flex items-center gap-6 md:gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:flex-1" />
              <div className="glass-card z-10 flex w-full items-center gap-5 rounded-2xl p-6 md:w-auto md:flex-none md:justify-center md:px-8 md:py-7">
                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-serif text-lg font-bold text-primary-foreground">
                  {s.n}
                </div>
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/70">{s.desc}</p>
                </div>
              </div>
              <div className="md:flex-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <CTAButton href="#cong-dong">🌟 KHÁM PHÁ HÀNH TRÌNH CỦA TÔI</CTAButton>
      </div>
    </Section>
  );
}

function BanDo() {
  const cities = [
    { icon: "🌳", name: "Thành phố Tình Yêu" },
    { icon: "🌸", name: "Thành phố Chữa Lành" },
    { icon: "🎨", name: "Thành phố Sáng Tạo" },
    { icon: "👨‍👩‍👧", name: "Thành phố Gia Đình" },
    { icon: "🧘", name: "Thành phố Thiền Định" },
    { icon: "🤝", name: "Thành phố Phụng Sự" },
    { icon: "🎭", name: "Thành phố Nghệ Thuật" },
    { icon: "🌱", name: "Thành phố Thiên Nhiên" },
    { icon: "💎", name: "Thành phố Thịnh Vượng" },
    { icon: "⚖️", name: "Thành phố Công Lý" },
    { icon: "🌐", name: "Thành phố Hợp Nhất" },
  ];

  return (
    <Section id="ban-do" className="bg-background">
      <div className="text-center">
        <Eyebrow>Bản Đồ Vương Quốc</Eyebrow>
        <SectionTitle>
          KHÁM PHÁ <span className="gradient-text">12 VÙNG ĐẤT</span>
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Một vương quốc được kiến tạo bởi những giá trị của Ánh Sáng.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((c) => (
          <div
            key={c.name}
            className="glass-card hover-scale group flex items-center gap-4 rounded-2xl p-5"
          >
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/50 to-primary/20 text-2xl transition-transform group-hover:scale-110">
              {c.icon}
            </div>
            <span className="font-serif text-base font-semibold leading-tight text-foreground">
              {c.name}
            </span>
          </div>
        ))}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent p-6 text-center text-primary-foreground shadow-lg shadow-primary/30">
          <div className="text-3xl">👑</div>
          <h3 className="mt-2 font-serif text-lg font-bold leading-tight">
            Central Light City
          </h3>
          <p className="text-xs opacity-90">Thành phố Ánh Sáng Trung Tâm</p>
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        </div>
      </div>
    </Section>
  );
}

function CongDong() {
  const topics = [
    "Phát triển bản thân",
    "Thiền và chữa lành",
    "Nghệ thuật",
    "Sáng tạo",
    "Công nghệ",
    "Phụng sự cộng đồng",
    "Xây dựng tương lai",
  ];

  return (
    <Section id="cong-dong" className="bg-secondary/40">
      <div className="text-center">
        <Eyebrow>Cộng Đồng Ánh Sáng</Eyebrow>
        <SectionTitle className="mx-auto max-w-3xl">
          KHÔNG AI ĐI TRÊN HÀNH TRÌNH NÀY{" "}
          <span className="gradient-text">MỘT MÌNH.</span>
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Kết nối những người cùng yêu thích:
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {topics.map((t) => (
          <span
            key={t}
            className="glass-card hover-scale rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-14 text-center">
        <CTAButton href="#tham-gia">💛 THAM GIA CỘNG ĐỒNG</CTAButton>
      </div>
    </Section>
  );
}

function ThuVien() {
  const items = [
    { icon: "📚", name: "Sách & Tài liệu" },
    { icon: "🎧", name: "Âm nhạc thiền" },
    { icon: "🎬", name: "Video" },
    { icon: "🎙", name: "Podcast" },
    { icon: "🌟", name: "Bài học 5D" },
    { icon: "🧘", name: "Thực hành thiền" },
    { icon: "✨", name: "Câu chuyện truyền cảm hứng" },
  ];

  return (
    <Section id="thu-vien" className="bg-background">
      <div className="text-center">
        <Eyebrow>Thư Viện Ánh Sáng</Eyebrow>
        <SectionTitle>
          KHÔNG GIAN <span className="gradient-text">NỘI DUNG ÁNH SÁNG</span>
        </SectionTitle>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.name}
            className="glass-card hover-scale flex flex-col items-center rounded-2xl p-7 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent/60 to-primary/25 text-3xl">
              {it.icon}
            </div>
            <p className="mt-4 font-serif text-lg font-semibold text-foreground">
              {it.name}
            </p>
          </div>
        ))}
        <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent p-7 text-center">
          <a
            href="#tham-gia"
            className="font-serif text-lg font-bold text-primary-foreground hover:underline"
          >
            KHÁM PHÁ THƯ VIỆN →
          </a>
        </div>
      </div>
    </Section>
  );
}

function FunCosmos() {
  return (
    <section
      id="fun-cosmos"
      className="aurora-bg scroll-mt-24 px-5 py-24 text-center sm:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Vũ trụ tương tác
        </p>
        <h2 className="font-serif text-5xl font-bold gradient-text sm:text-6xl">
          FUN COSMOS
        </h2>
        <p className="mt-2 font-serif text-2xl font-medium text-foreground/80">
          THE LIGHT JOURNEY
        </p>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-foreground/75">
          Một vũ trụ giả tưởng nơi người chơi khám phá, sáng tạo, kết nối và xây
          dựng những thành phố của tương lai.
        </p>
        <div className="mt-10">
          <CTAButton href="#su-kien">🎮 KHÁM PHÁ FUN COSMOS</CTAButton>
        </div>
      </div>
    </section>
  );
}

function SuKien() {
  const events = [
    { icon: "🌟", name: "Lễ hội Ánh Sáng" },
    { icon: "🧘", name: "Thiền cộng đồng" },
    { icon: "🎤", name: "Talkshow" },
    { icon: "🎨", name: "Workshop sáng tạo" },
    { icon: "🎮", name: "Sự kiện FUN COSMOS" },
    { icon: "🤝", name: "Hoạt động cộng đồng" },
  ];

  return (
    <Section id="su-kien" className="bg-background">
      <div className="text-center">
        <Eyebrow>Sự Kiện Ánh Sáng</Eyebrow>
        <SectionTitle>
          LỊCH <span className="gradient-text">SỰ KIỆN</span>
        </SectionTitle>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <div
            key={e.name}
            className="glass-card hover-scale flex items-center gap-4 rounded-2xl p-6"
          >
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-accent/50 to-primary/20 text-2xl">
              {e.icon}
            </div>
            <span className="font-serif text-lg font-semibold text-foreground">
              {e.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <CTAButton href="#tham-gia" variant="ghost">
          XEM TẤT CẢ SỰ KIỆN
        </CTAButton>
      </div>
    </Section>
  );
}

function SanPham() {
  const cats = [
    { icon: "💎", name: "Sản phẩm Ánh Sáng" },
    { icon: "🌿", name: "Sức khỏe & Phong cách sống" },
    { icon: "🎨", name: "Nghệ thuật" },
    { icon: "📚", name: "Giáo dục" },
    { icon: "🎮", name: "Công nghệ & Game" },
    { icon: "🌐", name: "Các dự án cộng đồng" },
  ];

  return (
    <Section id="san-pham" className="bg-secondary/40">
      <div className="text-center">
        <Eyebrow>Sản Phẩm & Dịch Vụ</Eyebrow>
        <SectionTitle>
          HỆ SINH THÁI <span className="gradient-text">ÁNH SÁNG</span>
        </SectionTitle>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cats.map((c) => (
          <div
            key={c.name}
            className="glass-card hover-scale rounded-2xl p-7 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent/60 to-primary/25 text-2xl">
              {c.icon}
            </div>
            <p className="mt-4 font-serif text-lg font-semibold text-foreground">
              {c.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CauChuyen() {
  return (
    <Section id="cau-chuyen" className="bg-background text-center">
      <Eyebrow>Câu Chuyện Ánh Sáng</Eyebrow>
      <SectionTitle className="mx-auto max-w-2xl">
        MỖI NGƯỜI ĐỀU CÓ MỘT{" "}
        <span className="gradient-text">ÁNH SÁNG BÊN TRONG.</span>
      </SectionTitle>
      <p className="mx-auto mt-5 max-w-xl text-foreground/70">
        Chia sẻ câu chuyện của những người đang thay đổi cuộc sống bằng tình yêu,
        sáng tạo và phụng sự.
      </p>
      <div className="mt-10">
        <CTAButton href="#tham-gia">ĐỌC CÂU CHUYỆN</CTAButton>
      </div>
    </Section>
  );
}

function ThamGia() {
  return (
    <section
      id="tham-gia"
      className="aurora-bg scroll-mt-24 px-5 py-28 text-center sm:py-36"
    >
      <div className="mx-auto max-w-2xl">
        <Eyebrow>Tham Gia Hành Trình</Eyebrow>
        <h2 className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          BẠN ĐÃ SẴN SÀNG{" "}
          <span className="gradient-text">BƯỚC ĐI CHƯA?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/75">
          HÀNH TRÌNH ÁNH SÁNG không phải là nơi để bạn trở thành một người khác.
          Đó là nơi để bạn khám phá, nuôi dưỡng và trao tặng những điều tốt đẹp
          nhất bên trong mình.
        </p>
        <div className="mt-10">
          <CTAButton href="#trang-chu">🌟 BẮT ĐẦU HÀNH TRÌNH</CTAButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    "Về chúng tôi",
    "Vương Quốc 5D",
    "Hành Trình",
    "Cộng đồng",
    "Thư viện",
    "Sự kiện",
    "Liên hệ",
  ];
  return (
    <footer id="footer" className="bg-foreground px-5 py-16 text-center text-primary-foreground/80">
      <div className="mx-auto max-w-3xl">
        <p className="font-serif text-2xl font-bold text-primary-foreground">
          HÀNH TRÌNH ÁNH SÁNG
        </p>
        <p className="mt-1 text-sm text-primary-foreground/60">
          Light Journey — 5D Kingdom
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
          Thức tỉnh • Chữa lành • Sáng tạo • Phụng sự • Hợp nhất
        </p>

        <nav className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <a
              key={l}
              href="#trang-chu"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="mt-10 font-serif text-lg italic text-primary-foreground/80">
          “Khi nhiều trái tim cùng tỏa sáng, thế giới sẽ bừng lên ánh sáng.”
        </p>

        <p className="mt-8 text-xs text-primary-foreground/50">
          © 2026 Hành Trình Ánh Sáng
        </p>
      </div>
    </footer>
  );
}

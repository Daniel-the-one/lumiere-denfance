import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/SocialIcons";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Article introuvable" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article>
        {/* En-tête */}
        <header className="relative flex min-h-[52vh] items-end overflow-hidden bg-charcoal pb-16 pt-32">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 gradient-overlay" />
          </div>
          <div className="container-x relative z-10">
            <nav
              aria-label="Fil d'Ariane"
              className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70"
            >
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/actualites" className="hover:text-white">
                Actualités
              </Link>
              <span aria-hidden="true">/</span>
              <span className="line-clamp-1 text-white">{post.title}</span>
            </nav>
            <div className="flex items-center gap-3">
              <Badge className="bg-white/90 backdrop-blur-sm">{post.category}</Badge>
              <span className="text-sm text-white/80">
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/70">
              {post.category} &middot; Lumière d&apos;Enfance
            </p>
          </div>
        </header>

        {/* Corps */}
        <Section tone="cream">
          <div className="mx-auto max-w-2xl">
            <p className="text-pretty font-display text-xl font-semibold leading-relaxed text-charcoal">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-muted">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Section>
      </article>

      {/* Autres articles */}
      <Section tone="white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-2xl font-extrabold text-charcoal sm:text-3xl">
            À lire également
          </h2>
          <Link
            href="/actualites"
            className="group inline-flex items-center gap-2 font-semibold text-teal hover:text-teal-dark"
          >
            Toutes les actualités
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="mt-12 grid gap-7 md:grid-cols-3">
          {others.map((p) => (
            <li key={p.slug}>
              <Link href={`/actualites/${p.slug}`} className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-cream shadow-[var(--shadow-soft)] ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs text-muted">{formatDate(p.date)}</span>
                    <h3 className="mt-2 flex-1 font-display text-lg font-bold text-charcoal">
                      {p.title}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                      Lire la suite
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ButtonLink href="/actualites" variant="outline">
            Retour aux actualités
          </ButtonLink>
        </div>
      </Section>

      <CTASection />
    </>
  );
}

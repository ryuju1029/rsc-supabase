## Getting Started

First, run the development server:

```bash
npm run dev
```

## サーバーコンポーネントのキャッシュオプション

- default getStaticProps (SSG) ビルド時に実行

```bash
fetch(URL, {cache: "force-cache"})
```

- getServerSideProps (SSR)

```bash
fetch(URL, {cache: "no-store"})
```

- getStaticProps (ISR)

```bash
fetch(URL, {next: {recaildate: 10}})
```

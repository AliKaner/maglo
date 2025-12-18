# Maglo

Finansal gösterge panelleri, cüzdanlar, faturalar ve işlem yönetimi için hazırlanmış,
**Next.js 16 + React 19** tabanlı bir demo uygulamadır. Kimlik doğrulama, responsive
dashboard ve sahte/gerçek API desteğiyle uçtan uca bir ürün akışını simüle eder.

---

## Installment (Kurulum & Çalıştırma)

- **Gereksinimler**
  - **Node.js**: `>= 20` (LTS önerilir)
  - Paket yöneticisi: `npm`, `yarn` veya `pnpm`

- **Depoyu klonla**

```bash
git clone https://github.com/AliKaner/nl-case.git
cd maglo
```

- **Bağımlılıkları yükle**

```bash
npm install
# veya
yarn
# veya
pnpm install
```

- **Geliştirme ortamını başlat**

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

- **Production build**

```bash
npm run build
npm start
```

---

## Demo Account

Uygulama, kayıt olma ve giriş akışlarını gerçek bir backend servisi üzerinden yönetmek
üzere tasarlanmıştır. Demo için aşağıdaki senaryolardan birini kullanabilirsiniz:

- **1. Kendi demo kullanıcınızı oluşturun**
  - `Sign Up` sayfasına gidin.
  - E-posta ve şifre ile kayıt olun.
  - Ardından aynı bilgilerle `Sign In` yaparak dashboard’a erişin.

- **2. Hazır demo hesabı (opsiyonel)**
  - Kendi hesabınızı da oluşturabilirsiniz ama eğer istemezseniz bu hesabı kullanabilirsiniz.

```text
Email   : demo@gmail.com
Şifre   : Demo123!
```

---

## Extras (Teknik Özellikler)

- **Teknolojiler**
  - **Next.js 16 App Router**
  - **React 19**, **TypeScript**
  - **SCSS Modules** ile component bazlı stiller
  - **React Query (`@tanstack/react-query`)** ile server state yönetimi
  - **Zustand** ile global state yönetimi (ör. kullanıcı bilgileri)
  - **React Hook Form + Zod** ile form yönetimi ve doğrulama
  - **Axios** ile API istekleri
  - **Chart.js + react-chartjs-2** ile grafikler

- **Öne çıkan özellikler**
  - **Auth flow**: Register, login, logout ve `protected` rotalar
  - **Dashboard**: Özet kartlar, çalışma sermayesi grafiği, son işlemler vb.
  - **Invoices / Transactions / Wallets / Settings** sayfaları
  - **Responsive tasarım**: Web ve mobil için optimize edilmiş layout
  - **Hata yönetimi**: `error.tsx`, `global-error.tsx` ve özel `Error` component’i
  - **SEO & PWA detayları**: `sitemap.ts`, `robots.ts`, `manifest.ts`

---

## Zamanım Olsaydı Eklemek İstediklerim

- **Tema seçenekleri**
  - **Siyah / beyaz (dark / light) tema toggle**
  - Kullanıcıya göre hatırlanan tema tercihi (local storage / cookie)

- **Çok dillilik (multi-language)**
  - **TR / EN** başta olmak üzere çoklu dil desteği
  - `i18n` altyapısı ile sayfa ve komponent bazlı çeviri yönetimi

- **Gelişmiş veri deneyimi**
  - Filtreler, arama ve sıralama için daha detaylı kontrol paneli
  - Raporları **CSV / PDF olarak dışa aktarma**

- **Kullanıcı / rol yönetimi**
  - Admin / user rollerine göre yetki bazlı görünürlük
  - Bazı dashboard widget’larının kullanıcı tarafından özelleştirilebilmesi

---

## Case Dokümanında Olmayıp Ek Olarak Yaptıklarım

- **Dashboard harici sayfalar**
  - `Invoices`, `Transactions`, `My Wallets`, `Settings` gibi ek akışlar

- **UI / UX detayları**
  - Dashboard üzerindeki **hover efektleri** ve mikro etkileşimler
  - **Giriş (auth) sayfalarındaki küçük animasyonlar** (button, input, transition vb.)

- **Drawer & Toast sistemi**
  - Farklı sayfalarda kullanılan **drawer** yapıları (detay, filtre vb.)
  - İşlem geri bildirimleri için **toast notification** sistemi (success / error / info)

---

## Folder Structure

Projenin ana klasör yapısı özetle aşağıdaki gibidir:

```text
src
├─ app
│  ├─ (protected)        # Oturum gerektiren sayfalar (dashboard, invoices, wallets, settings, transactions)
│  ├─ auth               # Giriş / çıkış / kayıt sayfaları ve layout
│  ├─ error.tsx          # Genel hata sayfası
│  ├─ global-error.tsx   # Global error boundary
│  ├─ layout.tsx         # Root layout
│  ├─ loading.tsx        # Global loading ekranı
│  ├─ manifest.ts, robots.ts, sitemap.ts
│  └─ page.tsx           # Landing / giriş yönlendirmesi
│
├─ features
│  ├─ auth               # Auth ile ilgili sayfa içerikleri, hook'lar, store ve şemalar
│  ├─ dashboard          # Dashboard bileşenleri, hook'lar ve layout
│  ├─ invoices           # Fatura listesi, özet ve badge bileşenleri
│  ├─ my-wallets         # Cüzdanlar sayfası içerikleri
│  ├─ settings           # Ayarlar sayfası içerikleri
│  └─ transactions       # İşlemler sayfası içerikleri
│
├─ shared
│  ├─ components         # Ortak UI bileşenleri (Button, Card, Icon, Input, Chart, Tooltip, Loader vb.)
│  ├─ constants          # Sabitler (API rotaları, hata mesajları, route tanımları vb.)
│  ├─ hooks              # Ortak hook'lar (chart vb.)
│  ├─ lib
│  │  ├─ api             # Axios instance'ları, protected/unprotected istekler, servisler
│  │  └─ providers       # Uygulama genelinde kullanılan provider'lar
│  ├─ stores             # Zustand store'ları
│  ├─ types              # Tip tanımları (API response, currency, date, error, language vb.)
│  └─ utils              # Yardımcı fonksiyonlar (tarih, fiyat formatlama, yüzde hesaplama vb.)
│
├─ styles
│  ├─ globals.scss       # Global stiller
│  ├─ typography.scss    # Tipografi ayarları
│  └─ variables.scss     # Renk, spacing vb. değişkenler
│
└─ fonts                 # Özel font dosyaları ve entry
```

---

## Page Screenshots (WEB)

<img width="1902" height="908" alt="image" src="https://github.com/user-attachments/assets/8a5b16f9-c430-43f8-b791-b37a1b39c109" />
<img width="1906" height="908" alt="image" src="https://github.com/user-attachments/assets/bd4ed8f8-39ab-466a-8445-2cf95721eecf" />
<img width="1905" height="894" alt="image" src="https://github.com/user-attachments/assets/4e9861b4-ce24-44d9-b072-c155fa058f35" />
<img width="1901" height="910" alt="image" src="https://github.com/user-attachments/assets/8ffec53f-3731-4cf1-8076-987a3e562fec" />
<img width="1906" height="908" alt="image" src="https://github.com/user-attachments/assets/9e212fa9-be24-4a5d-8e5e-a9c201bad3fc" />
<img width="1909" height="912" alt="image" src="https://github.com/user-attachments/assets/f1e1acff-ff28-48ea-bc06-3c7d58c0e25f" />
<img width="1902" height="900" alt="image" src="https://github.com/user-attachments/assets/6a9c2ac7-0c7a-4bc0-93e9-579a9a7bf11c" />

## Page Screenshots (Mobile)

<img width="371" height="815" alt="image" src="https://github.com/user-attachments/assets/f7c67b09-77c4-4b87-8a79-d5935dd69355" />
<img width="368" height="629" alt="image" src="https://github.com/user-attachments/assets/392fccab-1be2-4285-92a0-58a686e41033" />
<img width="369" height="811" alt="image" src="https://github.com/user-attachments/assets/47d15148-e418-442e-b656-8c470c65708e" />
<img width="370" height="813" alt="image" src="https://github.com/user-attachments/assets/a26e48c6-5cdb-45e5-bdf8-aad25aa16e8e" />
<img width="369" height="809" alt="image" src="https://github.com/user-attachments/assets/3c2861b0-e4b2-4ba3-98b3-207abadde069" />
<img width="363" height="811" alt="image" src="https://github.com/user-attachments/assets/886bd6d5-1fa4-4d43-b09e-b76a6c3d1688" />
<img width="373" height="822" alt="image" src="https://github.com/user-attachments/assets/172b17ae-8703-4a91-967e-f70b29debbbc" />
<img width="372" height="811" alt="image" src="https://github.com/user-attachments/assets/435ae708-273b-4de3-bb9c-f25cbe0abfeb" />

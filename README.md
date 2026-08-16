# DevTrack — Proje Yönetim Dashboard'u

DevTrack, yazılım projelerini kolay bir şekilde oluşturmak, takip etmek ve yönetmek amacıyla geliştirilmiş React tabanlı bir proje yönetim uygulamasıdır.

Proje kapsamında temel CRUD işlemleri uygulanmıştır.

## Özellikler

- Yeni proje ekleme
- Projeleri listeleme
- Mevcut projeleri güncelleme
- Projeleri silme
- Proje durumlarını takip etme
- Öncelik seviyesi belirleme
- Proje bitiş tarihi ekleme
- Proje verilerini LocalStorage üzerinde saklama
- Responsive kullanıcı arayüzü

## Kullanılan Teknolojiler

- React.js
- Vite
- Tailwind CSS
- JavaScript
- LocalStorage

## Proje Yapısı

```text
src/
├── components/
│   ├── ProjectCard.jsx
│   ├── ProjectForm.jsx
│   └── StatsCard.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

## CRUD İşlemleri

Uygulamada temel CRUD işlemleri aşağıdaki şekilde uygulanmıştır:

- **Create:** Yeni proje oluşturma
- **Read:** Projeleri listeleme
- **Update:** Mevcut proje bilgilerini düzenleme
- **Delete:** Projeleri silme

Projeler tarayıcının `LocalStorage` alanında saklandığı için sayfa yenilendiğinde veriler korunmaktadır.

## Kurulum

Projeyi bilgisayarınızda çalıştırmak için:

```bash
git clone <repository-url>
```

Proje klasörüne girin:

```bash
cd devtrack-project-management
```

Gerekli paketleri yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Daha sonra terminalde gösterilen localhost adresini tarayıcıda açabilirsiniz.

## Production Build

Production sürümü oluşturmak için:

```bash
npm run build
```

## Proje Amacı

Bu proje, Web Geliştirme ve JavaScript eğitimi kapsamında React.js kullanılarak geliştirilmiştir. Projenin amacı modern JavaScript yapısını, component tabanlı geliştirmeyi, CRUD işlemlerini ve kullanıcı arayüzü geliştirme becerilerini uygulamalı olarak göstermektir.

## Canlı Demo

Netlify üzerinden yayınlanan proje:

https://devtrack-dashboard.netlify.app/

## Geliştirici

**Muhenned Sıffu**
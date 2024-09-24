# Schiphol Flight App

Bu proje, Schiphol havaalanındaki uçuşları görüntülemek ve kaydetmek için geliştirilmiş bir web uygulamasıdır. Uygulama, kullanıcıların uçuş aramaları yapmasına ve uçuş bilgilerini kaydetmesine olanak tanır.

## Minimum Gereksinimler

-   **Node.js**: 14.x veya üzeri
-   **MongoDB**: Bulut tabanlı bir MongoDB bağlantısı
-   **npm**: 6.x veya üzeri

## Ön Koşullar

1. **MongoDB Bağlantısı**:

    - MongoDB bağlantı dizesini içeren bir `.env` dosyası oluşturmalısınız. İsterseniz aşağıdaki örneğe göre kendiniz için özel olarak ayarlayabilirsiniz veya **proje dizininde bulunan `.env` dosyasını kullanabilirsiniz.**:
        ```plaintext
        NODE_ENV=development
        PORT=5000
        MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority&appName=<appName>
        SCHIPHOL_APP_ID=<your_app_id>
        SCHIPHOL_APP_KEY=<your_app_key>
        ```

2. **Gerekli Paketlerin Yüklenmesi**: Projenin kök dizininde ve frontend dizininde, aşağıdaki komutu çalıştırarak gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

# Geliştirme Ortamında Çalıştırma

1. **Sunucu ve İstemci Uygulamalarını Başlatma:**

    - Uygulamayı geliştirme modunda çalıştırmak için aşağıdaki komutu kullanın:

    ```bash
    npm run dev
    ```

    Bu komut, hem backend sunucusunu (`server.js`) hem de frontend uygulamasını başlatacaktır.

2. **Backend Sunucusu:**

    - Sunucu, `localhost:5000` üzerinde çalışacaktır. API uç noktalarına erişmek için bu adresi kullanabilirsiniz.
    - Örneğin: `localhost:5000` veya `localhost:5000/my-flights`

3. **Frontend Uygulaması:**
    - Frontend uygulaması, `localhost:3000` üzerinde çalışmaktadır. Tarayıcınızda bu adresi ziyaret ederek uygulamayı görebilirsiniz.

## Kullanım

-   **Ana Sayfa:** Uçuş araması yapmak için formu kullanabilir, veritabanına kaydetmek istediğiniz uçuşları veritabanına kaydedebilirsiniz.
-   **My Flights Sayfası:** MongoDB'ye kaydedilen uçuşlarınızı görüntüleyebilir ve yönetebilirsiniz.
-   **Tema Değişikliği:** Uygulamanın görünümünü değiştirmek için tema geçişi yapabilirsiniz.

## Yapılandırma ve Özelleştirme

-   **Stil ve Temalar:** Proje Tailwind CSS ile stilize edilmiştir.
-   **API Ayarları:** Schiphol uçuş verilerini almak için API anahtarlarınızı .env dosyasına eklemeyi unutmayın.

### Ekran Görüntüleri

**Anasayfa**
![](/screenshots/homepage.png)

**Mobile Dark Anasayfa**
![](/screenshots/dark-mobile-homepage.png)

**Uçuşlarım**
![](/screenshots/my-flights.png)

**Mobile Dark Uçuşlarım**
![](/screenshots/dark-mobile-my-flights.png)

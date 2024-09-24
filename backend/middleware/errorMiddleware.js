// Bu fonksiyon, uygulama genelindeki hataları merkezi olarak yönetir.
const errorHandler = (err, req, res, next) => {
    // Hata durum kodunu alıyoruz. Eğer durum kodu yoksa varsayılan olarak 500 (Sunucu Hatası) kullanıyoruz.
    const statusCode = res.statusCode ? res.statusCode : 500;

    // İstemciye yanıt göndermeden önce, durum kodunu ayarlıyoruz.
    res.status(statusCode);

    // Hata mesajı ve isteğe bağlı olarak hata yığın izini JSON formatında geri döndürüyoruz.
    res.json({
        message: err.message, // Hata mesajını içeriyor.
        stack: process.env.NODE_ENV === "production" ? null : err.stack, // Eğer uygulama üretim ortamındaysa, yığın izini gizliyoruz; diğer durumlarda gösteriyoruz.
    });
};

module.exports = {
    errorHandler,
};

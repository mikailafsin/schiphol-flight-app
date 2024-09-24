const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // Mongoose ile veritabanına bağlanmaya çalışıyoruz, bağlantı başarılı olursa "conn" değişkenine atıyoruz.
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // Bağlantı başarılı olduğunda, konsola bağlantının başarılı olduğunu ve bağlanılan host bilgisini yazdırıyoruz.
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Bağlantı sırasında bir hata olursa, hatayı konsola yazdırıyoruz.
        console.log(error);
        // Hata oluştuğunda, süreci bir hata kodu ile sonlandırıyoruz (1 hata kodu, sürecin anormal şekilde sonlandığını belirtir).
        process.exit(1);
    }
};

module.exports = connectDB;

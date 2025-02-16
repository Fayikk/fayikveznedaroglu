import React, { useState } from 'react';
import '../styles/Courses.css';
import { FaSearch } from 'react-icons/fa';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      title: "React Native Ve Google Play İle Ödeme Almayı Öğren (2025)",
      description: "React Native Ve Google Play İle Ödeme Almayı Öğren (2025)",
      image: "/assets/react_native1.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/react-native-firebase-google-play-iap/?couponCode=73610C91498415F45B4A"
    },
    {
      title: "Remote Mastery:Uzak Masaüstü Kontrol Uygulaması Geliştirme",
      description: "Remote Mastery:Uzak Masaüstü Kontrol Uygulaması Geliştirme",
      image: "/assets/react_electron.png", // Add your course image
      purchaseLink: "https://www.udemy.com/course/react-nodejs-electron-masaustu-kontrol-uygulamas-gelistirme/?referralCode=212942D83502877F57BF"
    },
    {
      title: "Blazor SignalR WebRtc",
      description: "Blazor SignalR WebRtc",
      image: "/assets/blazor_webrtc.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/blazor-signalr-webrtc/?referralCode=610ED63240423FBAA6A7"
    },
    {
      title: "Build A EventMaster App With .Net Core And ReactJs - Redux",
      description: "Build A EventMaster App With .Net Core And ReactJs - Redux",
      image: "/assets/net__ react.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/build-a-eventmaster-app-with-net-core-and-reactjs-redux/?referralCode=A87C25E956B77EEC8AF6"
    },
    {
      title: "JWT İle Google,Github,Facebook,OpenId Kullanıcı İşlemleri",
      description: "JWT İle Google,Github,Facebook,OpenId Kullanıcı İşlemleri",
      image: "/assets/oauth20.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/jwt-ile-google-githubfacebookopenid-net-react/?referralCode=8648D33026EAF8907B76"
    },
    {
      //.Net 8 Ve NextJS İle Microservice Projesi Geliştirme - 2024 = https://www.udemy.com/course/net-ve-nextjs-ile-microservice-projesi-gelistirme-2024/?referralCode=44EB1E1A7ACCA5483218
      title: ".Net 8 Ve NextJS İle Microservice Projesi Geliştirme - 2024",
      description: ".Net 8 Ve NextJS İle Microservice Projesi Geliştirme - 2024",
      image: "/assets/nextjs_net.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/net-ve-nextjs-ile-microservice-projesi-gelistirme-2024/?referralCode=44EB1E1A7ACCA5483218"
    },
    {
      //React Native İle Mobil Programlama(C# Sql Ve Firebase) 2024 = https://www.udemy.com/course/react-native-ile-mobil-programlamac-sql-ve-firebase-2024/?referralCode=99F28FB6F1A6D7493744

      title: "React Native İle Mobil Programlama(C# Sql Ve Firebase) 2024",
      description: "React Native İle Mobil Programlama(C# Sql Ve Firebase) 2024",
      image: "/assets/react-native2.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/react-native-ile-mobil-programlamac-sql-ve-firebase-2024/?referralCode=99F28FB6F1A6D7493744"
    },
    {
      //C# .Net ve React TypeScript ile Açık Artırma Uygulaması-2024 = https://www.udemy.com/course/c-net-7-ve-react-typescript-signalr-jwt-mssql-proje/?referralCode=CC0099B289C353A732B7

      title: "C# .Net ve React TypeScript ile Açık Artırma Uygulaması-2024",
      description: "C# .Net ve React TypeScript ile Açık Artırma Uygulaması-2024",
      image: "/assets/typescript_net.png", // Add your course image
      purchaseLink: "https://www.udemy.com/course/c-net-7-ve-react-typescript-signalr-jwt-mssql-proje/?referralCode=CC0099B289C353A732B7"
    },
    {
      //ASPNET.Core MVC-Eksiksiz Kılavuz 2024(E-Ticaret Uygulaması) = https://www.udemy.com/course/web-gelistirme-ve-e-ticaret-ustalg/?referralCode=F8C13C18710B7F0E61E3

      title: "ASPNET.Core MVC-Eksiksiz Kılavuz 2024(E-Ticaret Uygulaması)",
      description: "Modern JavaScript teknikleri ve uygulamaları",
      image: "/assets/aspnetcore_mvc.png", // Add your course image
      purchaseLink: "https://www.udemy.com/course/web-gelistirme-ve-e-ticaret-ustalg/?referralCode=F8C13C18710B7F0E61E3"
    },
    {
      //C# .Net 7 İle Web Api Geliştirme(MsSql Veritabanı) = https://www.udemy.com/course/c-net-7-ile-web-api-gelistirmemssql-veritaban/?referralCode=B9FE0913BC3CEF7D0C26

      title: "C# .Net 7 İle Web Api Geliştirme(MsSql Veritabanı)",
      description: "C# .Net 7 İle Web Api Geliştirme(MsSql Veritabanı)",
      image: "/assets/restapi_free.png", // Add your course image
      purchaseLink: "https://www.udemy.com/course/c-net-7-ile-web-api-gelistirmemssql-veritaban/?referralCode=B9FE0913BC3CEF7D0C26"
    },
    {
      //Aspect Oriented Programming İle Caching Ve RabbitMQ(.Net 7) = https://www.udemy.com/course/aspect-oriented-programming-ile-caching-ve-rabbitmqnet-7/?referralCode=8B788C1F008F164B0845

      title: "Aspect Oriented Programming İle Caching Ve RabbitMQ(.Net 7)",
      description: "Aspect Oriented Programming İle Caching Ve RabbitMQ(.Net 7)",
      image: "/assets/RabbitMq.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/aspect-oriented-programming-ile-caching-ve-rabbitmqnet-7/?referralCode=8B788C1F008F164B0845"
    },
    {
      //Türkiye'deki C# Ve Blazor İle En Detaylı E-Ticaret(.NET 7-8) = https://www.udemy.com/course/turkiyedeki-c-ve-blazor-ile-en-detayl-e-ticaretnet-7/?referralCode=9829AFA0211EC8E0AE0B

      title: "Türkiye'deki C# Ve Blazor İle En Detaylı E-Ticaret(.NET 7-8)",
      description: "Türkiye'deki C# Ve Blazor İle En Detaylı E-Ticaret(.NET 7-8)",
      image: "/assets/Blazor_2.jpg", // Add your course image
      purchaseLink: "https://www.udemy.com/course/turkiyedeki-c-ve-blazor-ile-en-detayl-e-ticaretnet-7/?referralCode=9829AFA0211EC8E0AE0B"
    },
    {
      title: "C# .Net Ve Blazor İle Web Geliştirme(Full Stack,RestfullAPI)",
      description: "C# .Net Ve Blazor İle Web Geliştirme(Full Stack,RestfullAPI)",
      image: "/assets/Blazor_3.jpg",
      purchaseLink: "https://www.udemy.com/course/net-ve-blazor-ile-web-gelistirmefull-stack-development/?referralCode=8F19A8DA14456FD629B2"
    },
    {
      title: "C# AspnetCore Net 6.0 İle Api Geliştirme(Net 7 Uyumlu)",
      description: "C# AspnetCore Net 6.0 İle Api Geliştirme(Net 7 Uyumlu)",
      image: "/assets/webapi_free.jpg",
      purchaseLink: "https://www.udemy.com/course/c-aspnetcore-net-60-ile-api-gelistirmenet-7-uyumlu/?referralCode=9AE15B25337408ED736F"
    },
    {
      title: "ASP.NET Core İle Yetkilendirme İşlemleri Ve Restful Api",
      description: "ASP.NET Core İle Yetkilendirme İşlemleri Ve Restful Api",
      image: "/assets/jwt.jpg",
      purchaseLink: "https://www.udemy.com/course/aspnetcore-ile-yetkilendirme-islemleri-ve-restful-api/?referralCode=A24A01E74F1B49FACCA1"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="courses" className="courses">
      <h2>Udemy Eğitimlerim</h2>
      <div className="search-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Eğitim ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="courses-grid">
        {filteredCourses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-pricing">
                <span className="original-price">{course.price}</span>
                <span className="discounted-price">{course.discountedPrice}</span>
              </div>
              <a 
                href={course.purchaseLink} 
                className="purchase-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                İndirimli Satın Al
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;

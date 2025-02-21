import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'info@alarmizleme.com',
    subject: 'Yeni İletişim Formu Mesajı',
    html: `
      <h2>Yeni İletişim Formu Mesajı</h2>
      <p><strong>Ad Soyad:</strong> ${data.name}</p>
      <p><strong>E-posta:</strong> ${data.email}</p>
      <p><strong>Telefon:</strong> ${data.phone}</p>
      <p><strong>Mesaj:</strong></p>
      <p>${data.message}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}; 
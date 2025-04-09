// src/app/api/contacto/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Por ahora no hacemos nada para la petición GET
  return NextResponse.json({ message: 'GET request received for /api/contacto' });
}

export async function POST(request: NextRequest) {
  // Por ahora no hacemos nada para la petición POST
  return NextResponse.json({ message: 'POST request received for /api/contacto' });
}

// Puedes agregar más métodos HTTP si los necesitas (PUT, DELETE, etc.)
// export async function PUT(request: NextRequest) {
//   return NextResponse.json({ message: 'PUT request received for /api/contacto' });
// }

// export async function DELETE(request: NextRequest) {
//   return NextResponse.json({ message: 'DELETE request received for /api/contacto' });
// }

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------



// app/api/contacto/route.ts
/* import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Configura el transporter (usa tu servicio de email)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
} */
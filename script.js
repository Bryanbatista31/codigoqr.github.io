document.getElementById("vcard-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const codigo = document.getElementById("codigo").value;
    const telefono = document.getElementById("telefono").value.trim();
  
    if (!nombre || !apellido || !telefono) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    const numeroCompleto = `+1${codigo}${telefono.replace(/^0+/, '')}`;

    //const numeroCompleto = `+1${codigo}${telefono}`;
    /* const vcardData = `BEGIN:VCARD\nVERSION:3.0\nN:${apellido};${nombre};;;\nFN:${nombre} ${apellido}\nTEL;TYPE=CELL:${numeroCompleto}\nEND:VCARD`; */
    const vcardLines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${apellido};${nombre}`,
        `FN:${nombre} ${apellido}`,
        `TEL;TYPE=CELL:${numeroCompleto}`,
        "END:VCARD"
      ];
      
      const vcardData = vcardLines.join("\r\n");
      
      
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
  
    // Crear canvas
    const canvas = document.createElement("canvas");
    qrcodeContainer.appendChild(canvas);
  
    //QR en el canvas
    new QRious({
      element: canvas,
      value: vcardData,
      size: 250
    });
  });
  
  function limpiarCampos() {
    document.getElementById("vcard-form").reset();
    document.getElementById("qrcode").innerHTML = "";
  }
  
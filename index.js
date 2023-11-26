const express = require('express');
const app = express();
const port = 3000;

const data = [
  {
    id: 1,
    namaProvinsi: 'Jawa Barat',
    namaKecamatan: 'Bandung',
    namaDesa: 'Cibiru',
  },
  {
    id: 2,
    namaProvinsi: 'Jambi',
    namaKecamatan: 'Tebo Tengah',
    namaDesa: 'Tebing Tinggi',
  },
  {
    id: 3,
    namaProvinsi: 'Jawa Timur',
    namaKecamatan: 'Surabaya',
    namaDesa: 'Sukolilo',
  },
  {
    id: 4,
    namaProvinsi: 'Aceh',
    namaKecamatan: 'Surabaya',
    namaDesa: 'Sukolilo',
  },
  
  // Tambahkan data provinsi, kecamatan, dan desa lainnya sesuai kebutuhan
];

// Endpoint untuk mendapatkan semua data
app.get('/', (req, res) => {
  res.json(data);
});

// Endpoint untuk mendapatkan data berdasarkan ID
app.get('/', (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.find(item => item.id === id);

  if (result) {
    res.json(result);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
<script>
import axios from 'axios'
export default{
    data(){
        return {
            value:"",
            nomor:"",
            tagihan:"",
            jenis:"",
            dataiuran:"",
            email:"",
            password:"",
            role:""
        }
    },
    created(){
        // this.ambildata()
    },
    methods:{
        // reloadPage(){
        //     location.reload()
        // },
        getData(){
            if(this.value.length < 1){
                alert("Data Tidak Boleh Kosong")
            } else {
                let result =  axios.post("http://localhost:4000/create",{
                "nama":this.value,
                "email":this.email,
                "password":this.password,
                "alamat":this.nomor,
                "tagihan":this.tagihan,
                "jenis":this.jenis,
                }).then(response=>{
                    // console.log(response.data);
                    if(`${response.data}` == "ADA KESALAHAN SILAHKAN COBA LAGI"){
                        alert(`${response.data}`)
                    } else{
                        alert("DATA BERHASIL DITAMBAHKAN")
                        this.$router.push("/tabel")
                    }
                })
            }
        },
        
        lihatdata(){
            this.$router.push("/tabel")
        },
        logout(){
            let result =  axios.post("http://localhost:4000/logout").then(response=>{
                // console.log(response.data);
                if(`${response.data}` == "AKUN TERLOGOUT"){
                    alert("LOGOUT BERHASIL")
                    localStorage.setItem("autenticated", false)
                    this.$router.push("/login")
                } else{
                    alert("TERJADI KESALAHAN")
                }
            })
            
        }
    }
}
</script>
<template>
<div class="container min-w-full mx-auto py-8 items-center bg-slate-200 md:bg-gray-800 flex justify-center">
    <div data-aos="fade-up" data-aos-delay="500" class="w-full md:w-1/4 items-center bg-slate-200 rounded-2xl md:p-8 p-6">
        <div>
            <div class="text-center font-semibold text-black">
                Ini adalah halaman admin
            </div>
            <div class="text-center font-base text-black">
                Silahkan isi data disini!
            </div>
            <div class="flex justify-center">
                <div class="w-full justify-center">
                    <span class="px-1 text-sm text-gray-600">Email</span>
                    <input v-model="email" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"  type="email" placeholder="Email">

                    <span class="px-1 text-sm text-gray-600">Pasword</span>
                    <input v-model="password" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"  type="password" placeholder="Password">
            

                    <span class="px-1 text-sm text-gray-600">Nama Lengkap</span>
                    <input v-model="value" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" id="nama" type="text" placeholder="Nama Lengkap">

                    <span class="px-1 text-sm text-gray-600">Nomor Rumah</span>
                    <input v-model="nomor" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" id="nomor" type="text" placeholder="Nomor Rumah">

                    <span class="px-1 text-sm text-gray-600">Tagihan</span>
                    <input v-model="tagihan" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" id="tagihan" type="text" placeholder="Tagihan">
                    <span class="px-1 text-sm text-gray-600">Jenis Kelamin</span>
                    <input v-model="jenis" class="text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" id="jenis" type="text" placeholder="Jenis Kelamin">
                </div>
            </div>
        </div>
        <div class="md:flex justify-center">
            <div class="grid justify-items-center p-3 ">
                <button @click="getData" class="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded inline-flex items-center text-sm font-bold">
                    Tambahkan Data
                </button>
            </div>
            <div class="grid justify-items-center p-3 ">
                <button @click="lihatdata" class="bg-red-700 hover:bg-red-900 text-white py-2 px-4 rounded inline-flex items-center text-sm font-bold">
                    Lihat Data 
                </button>
            </div>
        </div>
    </div>
    <div>
        <button @click="logout">
            LOGOUT DISINI
        </button>
    </div>
</div>
</template>
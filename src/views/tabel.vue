<script>
import axios from 'axios';

export default{
   data(){
    return{
        datasensor:"",
        namaup:"",
        nomorup:"",
        tagihanup:"",
        jenisup:""
    }
   },

   created(){
    this.getData()
   },
   methods:{
    // async getData(){
    //     const data = await fetch("http://localhost:4000/get")
    //     const datajson = await data.json()
    //     this.datasensor = datajson
    //     console.log(this.datasensor)
    // }
    async getData(){
        const response= await axios.get("http://localhost:4000/get")
        this.datasensor = response.data
        console.log(this.datasensor)
    },

    hapus(x){
        console.log(x.email)
        const response = axios.post("http://localhost:4000/hapus/",{
            "id":x.id,
            "email":x.email
        })
        // console.log(x)
        // console.log(response)
        this.getData()
    },

    // ubah(x){
    //     const response = axios.put("http://localhost:4000/update",{
    //         "id":x,
    //         "nama":this.namaup,
    //         "alamat":this.nomorup,
    //         "tagihan":this.tagihanup,
    //         "jenis":this.jenisup
    //     })
    //     console.log(response)
    //     this.getData()
    // },
    coba(x){
        this.$router.push({
            name:"update",
            params:{
                id:x
            }
        })
        // this.$router.push("/update")
    }
   }
}
</script>
<template>
    <RouterView />
   <div class="w-full text-white  font-bold grid justify-items-center py-20 px-10">
    <!-- Hello {{ datasensor }} -->
    <table class="w-full border-collapse border border-white text-white">
            <tr>
                <td class="border border-white p-3">Nama Lengkap</td>
                <td class="border border-white p-3">Nomor Rumah</td>
                <td class="border border-white p-3">Tagihan</td>
                <td class="border border-white p-3">Jenis Kelamin</td>
                <td class="border border-white p-3">Aksi</td>
                <!-- <td class="border border-white p-3">Opsi Ubah</td> -->

            </tr>
            <tr v-for="i in datasensor">
                <td class="border border-white p-3">{{ i.nama }}</td>
                <td class="border border-white p-3">{{ i.alamat }}</td>
                <td class="border border-white p-3">{{ i.tagihan }}</td>
                <td class="border border-white p-3">{{i.jenis}}</td>
                <td class="border border-white p-3">
                    
                <div class="flex justify-center">
                    <button @click="hapus(x=i)" class="mr-4 p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-700 transition-all duration-300 text-white inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </button>
                    <!-- <button @click="ubah(x=i.id)" class="bg-green-700 inline-block mx-2 my-2.5 p-2"> Ubah</button> -->
                    <button @click="coba(x=i.id)" class="p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    </button>
                </div>

                    
                </td>
                <!-- <td class="border border-white p-3">
                    <div class="w-full">
                        <input v-model="namaup" class="shadow appearance-none border rounded w-fit p-1 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nama Lengkap">
                        <p class="font-bold text-white"> Value: {{ i.nama }}</p>
                        <input v-model="nomorup" class="shadow appearance-none border rounded w-fit mt-4 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Nomor Rumah">
                        <p class="font-bold text-white"> Value: {{ i.alamat }}</p>
                        <input v-model="tagihanup" class="shadow appearance-none border rounded w-fit mt-4 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Tagihan">
                        <p class="font-bold text-white"> Value: {{ i.tagihan }}</p>
                        <input v-model="jenisup" class="shadow appearance-none border rounded font-bol w-fit mt-4 p-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Jenis Kelamin">
                        <p class="font-bold text-white"> Value: {{ i.jenis }}</p>

                        <button @click="ubah(x=i.id)" class="bg-green-700 inline-block mx-2 my-2.5 p-2"> Ubah</button>
                        <button @click="coba" class="bg-green-700 inline-block mx-2 my-2.5 p-2"> Ubah</button>
                    </div>
                </td> -->
            </tr>
        </table>
   </div>

   


   <!-- <button @click="getData()">GET DATA</button> -->
</template>
<style></style>
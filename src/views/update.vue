<script>
import axios from 'axios';
export default{
    data(){
        return {
            id: this.$route.params.id,
            value:"",
            nomor:"",
            tagihan:"",
            jenis:""
        }
    },
    methods:{
        // pindah(){
        //     this.$route.push("/tabel")
        // },
       async ubah(){
            const response = await axios.put("http://localhost:4000/update",{
                "id":this.id,
                "nama":this.value,
                "alamat":this.nomor,
                "tagihan":this.tagihan,
                "jenis":this.jenis
            })
            // console.log(response)
            alert("Data Terupdate")
            this.$route.push("/tabel")
           
        },
        lihatData(){
            this.$route.push("/tabel")

        }
    }

}
</script>
<template>
 <!-- <h1 class="font-bold text-white">HALOOO{{ id }}</h1> -->
 <div class="w-full p-7">
      <input v-model="value" class="shadow appearance-none border rounded w-full py-6 px-3 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama Lengkap">
      <p class="font-bold text-white"> Value: {{ value }}</p>
      <input v-model="nomor" class="shadow appearance-none border rounded w-full mt-4 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nomor" type="text" placeholder="Nomor Rumah">
      <p class="font-bold text-white"> Value: {{ nomor }}</p>
      <input v-model="tagihan" class="shadow appearance-none border rounded w-full mt-4 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tagihan" type="text" placeholder="Tagihan">
      <p class="font-bold text-white"> Value: {{ tagihan }}</p>
      <input v-model="jenis" class="shadow appearance-none border rounded font-bol w-full mt-4 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="jenis" type="text" placeholder="Jenis Kelamin">
      <p class="font-bold text-white"> Value: {{ jenis }}</p>
    </div>
    <div class="grid justify-items-center p-2 ">
        <button @click="ubah" class="bg-green-500 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center">
            Mengedit Data
        </button>
        <div class="grid justify-items-center p-2 ">
        <div class="bg-red-700 font-bold text-white rounded-lg p-2">
            <router-link to="/tabel">
                Lihat Data
            </router-link>
        </div>
    </div>
     </div>

</template>
<style></style>
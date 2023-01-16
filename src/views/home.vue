<script>
  import axios from 'axios'
  export default{
    data(){
        return {
            value:"",
            nomor:"",
        }
    },
    methods:{
      getData(){
        this.$router.push("/admin")
        // alert("HALOOOOO")
      },
      login(){
            if(this.value.length < 1){
                alert("Data Tidak Boleh Kosong")
            } else {
                let result =  axios.post("http://localhost:4000/login",{
                "nama":this.value,    
                "alamat":this.nomor,
                })
                alert("Anda Telah login")
                this.$router.push("/landing")
            }
        },
    }
  }
</script>

<template>
  <div class="w-full p-4 bg-slate-700 flex justify-between">
      <h1 class="w-fit font-bold text-white flex items-center p-4">FAIZ PROJECT</h1>
      <div class="grid justify-items-center p-2 ">
        <button @click="getData" class="bg-red-700 text-xs text-white hover:bg-gray-400 font-bold rounded-full inline-flex items-center px-2">
            Admin Action
        </button>
    </div>

  </div>

  <div class="bg-slate-800 h-24  items-center flex justify-center">
      <div class="w-fit flex justify-center font-bold text-white text-xl text-center"> SELAMAT DATANG DI WEB IURAN PERUMAHAN  </div>
  </div>
  <div class="w-full px-40">
      <input v-model="value" class="shadow appearance-none border rounded w-full py-6 px-3 mt-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Masukkan Email">
      <p class="font-bold text-white"> Value: {{ value }}</p>
      <input v-model="nomor" class="shadow appearance-none border rounded w-full mt-4 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nomor" type="text" placeholder="Masukkan Password">
      <p class="font-bold text-white"> Value: {{ nomor }}</p>
    </div>
    <div class="grid justify-items-center p-2 ">
        <button @click="login" class="bg-green-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            Login
        </button>
        <div class="grid justify-items-center p-2 ">
    </div>
     </div>
  <!-- <RouterLink to="/admin">About</RouterLink> -->
</template>
<style>
body{
  background-color: #1e293b;
  
}
</style>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
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
  <nav>
    <div data-aos="fade-down" data-aos-delay="100" class="w-full p-4 bg-slate-800 flex justify-between">
      <h1 class="w-fit font-bold text-white flex items-center p-4">FAIZ PROJECT</h1>
      <div class="justify-items-center p-2 flex ">
        <li class="block px-1 lg:px-4 lg:pt-2 text-white font-semibold hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150 md:p-0"><RouterLink to="/login">Login</RouterLink></li>
        <button @click="getData" class="block px-1 lg:px-4 text-white font-semibold hover:text-cyan-700 lg:hover:border-b-4 border-cyan-700 duration-150 md:p-0">
            Admin Action
        </button>
      </div>
  </div>
  </nav>

  <header class="bg-slate-900 h-screen w-full box-border p-5 relative z-30">
    <div data-aos="zoom-in-up" data-aos-delay="1000" class=" jumbo w-full h-5/6 flex justify-center items-center ">
      <h1 class="text-3xl w-full text-white uppercase box-border p-4 font-sans text-center sm:text-4xl sm:w-96 md:w-full md:text-5xl">
        <span> Selamat Datang </span><br />
        di web <span class="text-cyan-700 font-semibold mr-4">iuran</span><br/>
        <span class="text-cyan-700 font-semibold">perumahan</span>
      </h1>

    </div>
  </header>

  <body>
    <div class="aboutContainer bg-white flex">
      <div class="max-w-3xl m-auto flex-row gap-12 md:min-h-screen">
        <div data-aos="fade-up bg-black">
          <h1 class="py-6 uppercase text-3.5 font-bold text-black text-2xl text-center">tentang kita</h1>
        </div>
        <div  class="rightAbout flex justify-between">
          <div class="flex-row box-border w-3/4 flex justify-between">
            <div data-aos="fade-down" data-aos-delay="200" class="mr-6">
              <img src="../assets/faiz.jpg" alt="saya" class="flex w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center">faiz amsyari rustam</article>
              <article class="pt-2 flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="mr-6">
              <img src="../assets/saya kotak.jpg" alt="saya" class="flex w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center">gempar sayang mama</article>
              <article class="pt-2 flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>


</template>

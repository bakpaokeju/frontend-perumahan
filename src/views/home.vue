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
  <header class="bg-slate-900 h-screen w-full box-border p-5 relative z-30 ">
    <div data-aos="zoom-in-up" data-aos-delay="1000" class=" jumbo w-full h-5/6 flex justify-center items-center ">
      <h1 class="text-3xl w-full text-white uppercase box-border p-4 font-sans text-center sm:text-4xl sm:w-96 md:w-full md:text-5xl">
        <span> Selamat Datang </span><br />
        di web <span class="text-cyan-700 font-semibold mr-4">iuran</span><br/>
        <span class="text-cyan-700 font-semibold">perumahan</span>
      </h1>

    </div>
  </header>

  <body>
    <div class="bg-slate-300 flex">
      <div class="max-w-3xl m-auto flex-row gap-12  items-center md:my-44">
        <div data-aos="fade-up bg-black">
          <h1 class="py-8 uppercase text-3.5 font-bold text-black text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">tentang kita</h1>
        </div>
        <div class="flex justify-between w-full">
          <div class="flex-col box-border flex justify-between items-center md:flex-row">
            <div data-aos="fade-down" data-aos-delay="200" class="md:mr-10 cursor-pointer mb-6 md:mb-0">
              <img src="../assets/faiz.jpg" alt="saya" class="flex justify-center w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center w-40">faiz amsyari rustam</article>
              <article class="flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="md:mr-10 cursor-pointer  mb-6 md:mb-0">
              <img src="../assets/saya kotak.jpg" alt="saya" class="flex w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center w-40">gempar sayang mama</article>
              <article class="flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
            <div data-aos="fade-down" data-aos-delay="200" class="md:mr-10 cursor-pointer items-center flex-col  mb-6 md:mb-0">
              <img src="../assets/syamil.jpg" alt="saya" class="w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center w-40">mujahidin syamil kaffah</article>
              <article class="flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" class="md:mr-10 cursor-pointer  mb-6 md:mb-0">
              <img src="../assets/saya kotak.jpg" alt="saya" class="flex w-40 rounded-full"/>
              <article class="pt-2 flex justify-center items-center uppercase text-xl font-bold text-cyan-700 text-center w-40">gempar sayang mama</article>
              <article class="flex justify-center items-center text-base font-bold text-black text-center"> aku sayang mama</article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>


</template>

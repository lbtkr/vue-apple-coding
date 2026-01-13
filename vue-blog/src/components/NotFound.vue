<template>
<section class="page_404">
	<div class="container">
		<div class="row">	
		    <div class="col-sm-12 ">
		        <div class="col-sm-10 col-sm-offset-1  text-center">
		            <div class="four_zero_four_bg">
			            <h1 class="text-center ">404</h1>
		            </div>
		
		            <div class="contant_box_404">
		                <h3 class="h2">Look like you're lost</h3>
                        <p>the page you are looking for not avaible!</p>
                        <router-link
                            to="/"
                            class="link_404">Go to Home</router-link>
	                </div>
		        </div>
		    </div>
		</div>
	</div>
</section>
</template>

<style lang="scss" scoped>
.page_404{
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
    padding:40px 0;
    background:#fff;
    font-family:'Arvo', serif;
    img{
        width:100%;
    }
    .row{
        .col-sm-12{
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    .four_zero_four_bg{
        margin:0 auto;
        background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
        height: 400px;
        background-position: center;
        h1{
            font-size:80px;
        }
        h3{
            font-size:80px;
        }
    }
    .link_404{			 
        color: #fff!important;
        padding: 10px 20px;
        background: #39ac31;
        margin: 20px 0;
        display: inline-block;
    }
    .contant_box_404{
        margin-top:-50px;
    }
}	 
</style>
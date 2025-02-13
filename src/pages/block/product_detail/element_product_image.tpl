{assign var = all_images value = []}
{if !empty($product.all_images)}
	{assign var = all_images value = $product.all_images}
{/if}

{assign var = config_slider value = [
	'navigation' => [
		'nextEl' => '.swiper-button-next',
		'prevEl' => '.swiper-button-prev'
	]
]}

{assign var = config_slider_thumbs value = [
	'spaceBetween'=> 10,
    'slidesPerView'=> 5,
    'freeMode'=> true,
    'watchSlidesProgress'=> true
]}

<div class="product-image-detail mb-4" nh-swiper-thumb>
	{* Ảnh chính *}
	<div class="product-image-detail-top ">
		<div class="position-relative">
			<div class="swiper mb-3" nh-swiper-large="{htmlentities($config_slider|@json_encode)}">
			    <div class="swiper-wrapper" nh-light-gallery>
			    	{if !empty($all_images)}
			    		{foreach from = $all_images item = image}
					        <div class="swiper-slide inner-image" data-src="{CDN_URL}{$image}">
					            <img class="img-fluid" src="{CDN_URL}{$image}" alt="{if !empty($product.name)}{$product.name}{/if}">
					        </div>
				        {/foreach}
			    	{/if}
			    </div>
                
			    {if !empty($config_slider.navigation) && !empty($all_images) && $all_images|@count gt 1}
				    <div class="swiper-button-next">
		                <i class="fa-light fa-angle-right h1"></i>
		            </div>
		            <div class="swiper-button-prev">
		                <i class="fa-light fa-angle-left h1"></i>
		            </div>
			    {/if}
			</div>
        </div>
    </div>

	{* Thumbs *}
	{if !empty($all_images) && $all_images|@count gt 1}
		<div nh-slider-thumbs nh-swiper-thumbs="{htmlentities($config_slider_thumbs|@json_encode)}" class="swiper">
		    <div class="swiper-wrapper">
		    	{foreach from = $all_images item = image}
		    		<div class="swiper-slide rounded overflow-hidden">
		    			<div class="ratio-1-1">
			            	<img class="img-fluid" src="{CDN_URL}{$this->Utilities->getThumbs($image, 150)}" alt="{if !empty($product.name)}{$product.name}{/if}">
			            </div>
			        </div>
		    	{/foreach}
		    </div>
		</div>
	{/if}
	        
    <div nh-block="t6u0nlw" type-load="document-ready"></div>
</div>
{strip}
{if !empty($data_block)}
	<div class="swiper partner_container bg-white rounded" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
	    <div class="swiper-wrapper">
	    	{foreach from = $data_block item = slider}
	    		{assign var = image_source value = ''}
				{if !empty($slider.image) && !empty($slider.image_source)}
					{assign var = image_source value = $slider.image_source}
				{/if}

				{assign var = image_url value = ''}
				{if !empty($slider.image) && $image_source == 'cdn'}
					{assign var = image_url value = "{CDN_URL}{$slider.image}"}
					{if !empty(DEVICE)}
					    {assign var = image_url value = "{CDN_URL}{$this->Utilities->getThumbs($slider.image, 350)}"}
					{/if}
				{/if}

				{if !empty($slider.image) && $image_source == 'template'}
					{assign var = image_url value = "{$slider.image}"}
					{if !empty(DEVICE)}
					    {assign var = image_url value = "{$this->Utilities->getThumbs($slider.image, 350, 'template')}"}
					{/if}
				{/if}
				
		        <div class="swiper-slide h-auto {if !empty($slider.class_item)}{$slider.class_item}{/if}">
		        	<a class="partner_item" href="{if !empty($slider.url)}{$slider.url}{/if}" alt="{if !empty($slider.name)}{$slider.name}{/if}">
		        		{$this->LazyLoad->renderImage([
	                        'src' => $image_url, 
	                        'alt' => $slider.name, 
	                        'class' => 'img-fluid object-contant',
	                        'ignore' => true
	                    ])}
		        	</a>
		        </div>
	        {/foreach}
	    </div>
	    {if !empty($data_extend.slider.pagination)}
		    <!-- If we need pagination -->
		    <div class="swiper-pagination"></div>
	    {/if}

	    {if !empty($data_extend.slider.navigation)}
		    <!-- If we need navigation buttons -->
		    <div class="swiper-button-next">
	            <i class="fa-light fa-angle-right display-2"></i>
	        </div>
	        <div class="swiper-button-prev">
	            <i class="fa-light fa-angle-left display-2"></i>
        </div>
        {/if}
	</div>
{/if}

{/strip}
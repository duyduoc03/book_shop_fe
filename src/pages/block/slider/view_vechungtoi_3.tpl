{strip}
{if !empty($data_block)}
    <div class="about-box">
    	{foreach from = $data_block item = slider}
    	    <div class="row align-items-center mb-5">
	    		{assign var = image_source value = ''}
				{if !empty($slider.image) && !empty($slider.image_source)}
					{assign var = image_source value = $slider.image_source}
				{/if}

				{assign var = image_url value = ''}
				{if !empty($slider.image) && $image_source == 'cdn'}
					{assign var = image_url value = "{CDN_URL}{$slider.image}"}
					{if !empty(DEVICE)}
					    {assign var = image_url value = "{CDN_URL}{$this->Utilities->getThumbs($slider.image, 720)}"}
					{/if}
				{/if}

				{if !empty($slider.image) && $image_source == 'template'}
					{assign var = image_url value = "{$slider.image}"}
					{if !empty(DEVICE)}
					    {assign var = image_url value = "{$this->Utilities->getThumbs($slider.image, 350, 'template')}"}
					{/if}
				{/if}
				
	            <div class="col-12 col-md-4 {if !empty($slider.class_item)}{$slider.class_item}{/if}">
		            <div class="ratio-1-1 mb-3">
    		            {$this->LazyLoad->renderImage([
                            'src' => $image_url, 
                            'alt' => "{if !empty($slider.name)}{$slider.name}{/if}", 
                            'class' => 'img-fluid'
                        ])}
		            </div>
	            </div>
	        	
	        	<div class="col-12 col-md-8">
		        	<div class="swiper-about--wrap" data-swiper-parallax="-300">
		        	    {if !empty($slider.name)}
		        	    	<div class="swiper-about--tile mb-3">
			        			{$slider.name}
			        		</div>
		        		{/if}
		        		
		        		{if !empty($slider.description)}
		        			<div class="swiper-about--description">
			        			{$slider.description}
			        		</div>
		        		{/if}
		        	</div>
	        	</div>
	        </div>
        {/foreach}
    </div>
{/if}

{/strip}
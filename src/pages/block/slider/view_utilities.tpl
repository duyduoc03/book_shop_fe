{strip}
{if !empty($data_block)}
    <div class="swiper" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
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
    				    {assign var = image_url value = "{CDN_URL}{$this->Utilities->getThumbs($slider.image, 500)}"}
    				{/if}
    			{/if}
    
    			{if !empty($slider.image) && $image_source == 'template'}
    				{assign var = image_url value = "{$slider.image}"}
    				{if !empty(DEVICE)}
    				    {assign var = image_url value = "{$this->Utilities->getThumbs($slider.image, 500, 'template')}"}
    				{/if}
    			{/if}
    			
    	        <div class="swiper-slide mt-0 mb-4 {if !empty($slider.class_item)}{$slider.class_item}{/if}">
    	            <div class="utilities_item text-center">
    	                <a class="block" href="{if !empty($slider.url)}{$slider.url}{/if}"{if !empty($slider.blank_link)} target="_blank"{/if}>
    	                    {$this->LazyLoad->renderImage([
                                'src' => $image_url, 
                                'alt' => $slider.name, 
                                'class' => 'img-fluid utilities_image rounded-8'
                            ])}
    	                </a>
                        <h4 class="utilities_title">
                            {$slider.name}
                        </h4>
    	            </div>
    	        </div>
            {/foreach}
    	</div>
	</div>
{/if}

{/strip}
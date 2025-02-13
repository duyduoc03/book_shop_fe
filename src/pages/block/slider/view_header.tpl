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
					    {assign var = image_url value = "{CDN_URL}{$this->Utilities->getThumbs($slider.image, 720)}"}
					{/if}
				{/if}

				{if !empty($slider.image) && $image_source == 'template'}
					{assign var = image_url value = "{$slider.image}"}
					{if !empty(DEVICE)}
					    {assign var = image_url value = "{$this->Utilities->getThumbs($slider.image, 720, 'template')}"}
					{/if}
				{/if}
				
		        <div class="swiper-slide text-center{if !empty($slider.class_item)} {$slider.class_item}{/if}">
		            <a href="{$this->Utilities->checkInternalUrl($slider.url)}" title="{$slider.name}"{if !empty($slider.blank_link)} target="_blank"{/if}>
    		            {if $slider@first}
    		                <img src="{$image_url}" class="img-fluid" alt="{if !empty($slider.name)}{$slider.name}{/if}">
    		            {else}
    		                <img data-src="{$image_url}" class="swiper-lazy img-fluid" alt="{if !empty($slider.name)}{$slider.name}{/if}">
    		                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
    		            {/if}
		            </a>
		        </div>
	        {/foreach}
	    </div>
	    {if !empty($data_extend.slider.pagination)}
		    <!-- If we need pagination -->
		    <div class="swiper-pagination"></div>
	    {/if}
	</div>
{/if}

{/strip}
{strip}
{if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de'])}
	<h3 class="title-section bd_section_category d-flex align-items-center mb-0">
	    {if !empty($data_extend['locale'][{LANGUAGE}]['icon_tieu_de'])}
    		{$this->LazyLoad->renderImage([
            	'src' => $this->Utilities->ReplaceVariableSystem($this->Block->getLocale('icon_tieu_de', $data_extend)), 
            	'alt' => $this->Block->getLocale('tieu_de', $data_extend),
            	'class' => 'img-fluid icon_section object-contant mr-3'
            ])}
        {/if}
        <div>
           {$this->Block->getLocale('tieu_de', $data_extend)} 
        </div>
	</h3>
{/if}

{if !empty($data_block)}
    <div class="swiper pt-4" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
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
    			
    	        <div class="swiper-slide banner-category_item mt-0 mb-4 {if !empty($slider.class_item)}{$slider.class_item}{/if}">
    	            <div class="utilities_item text-center">
    	                <a class="block" href="{if !empty($slider.url)}{$slider.url}{/if}"{if !empty($slider.blank_link)} target="_blank"{/if}>
        		            {$this->LazyLoad->renderImage([
                                'src' => $image_url, 
                                'alt' => $slider.name, 
                                'class' => 'img-fluid rounded-8'
                            ])}
                        
                            <h4 class="utilities_title home_category_title color-gray">
                                {$slider.name}
                            </h4>
                        </a>
    	            </div>
    	        </div>
            {/foreach}
    	</div>
	</div>
{/if}

{/strip}
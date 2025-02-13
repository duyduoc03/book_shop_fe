{strip}
{if !empty($data_block)}
    <div class="banner-wrapper">
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
			
	        
            <div{if !empty($slider.class_item)} class="{$slider.class_item}"{/if}>
                <a href="{if !empty($slider.url)}{$this->Utilities->checkInternalUrl($slider.url)}{/if}" title="{if !empty($slider.name)}{$slider.name}{/if}">
                    {$this->LazyLoad->renderImage([
                        'src' => $image_url, 
                        'alt' => "{if !empty($slider.name)}{$slider.name}{/if}", 
                        'class' => 'img-fluid w-100 rounded'
                    ])}
                </a>
            </div>
      
        {/foreach}
    </div>
{/if}

{/strip}
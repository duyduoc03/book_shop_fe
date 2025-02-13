{strip}
{if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de'])}
	<h3 class="title-section text-center text-white">
		{$this->Block->getLocale('tieu_de', $data_extend)}
		
		<div class="line-title">
    		{$this->LazyLoad->renderImage([
            	'src' => "{CDN_URL}/media/template/bottom-title.webp", 
            	'alt' => "image",
            	'class' => 'img-fluid object-contant'
            ])}
		</div>
	</h3>
{/if}

{if !empty($data_block)}
    <div class="about-wrapper">
        <div class="row">
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
    				    {assign var = image_url value = "{$this->Utilities->getThumbs($slider.image, 350, 'template')}"}
    				{/if}
    			{/if}
    			
    	        <div class="col-12 col-md-6 mb-5 {if !empty($slider.class_item)}{$slider.class_item}{/if}">
    	        	<div class="item-about-wrapper">
    	        	    {if !empty($slider.name)}
    	        	    	<div class="about-wrapper--tile mb-3">
    		        			{$slider.name}
    		        		</div>
    	        		{/if}
    	        		
    	        		{if !empty($slider.description)}
    	        			<div class="about-wrapper--description">
    		        			{$slider.description}
    		        		</div>
    	        		{/if}
    	        	</div>
    	        </div>
            {/foreach}
        </div>
    </div>
{/if}

{/strip}
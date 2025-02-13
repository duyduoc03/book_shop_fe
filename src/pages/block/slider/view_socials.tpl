{strip}
{if !empty($data_block)}
	<div class="footer_social">
	    <div class="d-inline-flex align-items-center">
	    	{foreach from = $data_block item = slider}
    	        {if !empty($slider.description_short)}
        	        <a class="social_item" href="{if !empty($slider.url)}{$slider.url}{/if}">
        	            {$this->LazyLoad->renderContent($slider.description_short)}
        	        </a>
    	        {/if}
	        {/foreach}
	    </div>
	</div>
{/if}
{/strip}
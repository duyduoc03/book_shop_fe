{strip}
{$tab_id = "tab_christmas-{time()}-{rand(1, 1000)}"}

{if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de_tab'])}
	<h3 class="title-section title_christmas bd_section_category d-flex align-items-center mb-3 p-0 pb-3">
	    {if !empty($data_extend['locale'][{LANGUAGE}]['icon_tieu_de'])}
    		{$this->LazyLoad->renderImage([
            	'src' => $this->Utilities->ReplaceVariableSystem($this->Block->getLocale('icon_tieu_de', $data_extend)), 
            	'alt' => $this->Block->getLocale('tieu_de_tab', $data_extend),
            	'class' => 'img-fluid icon_section object-contant mr-3'
            ])}
        {/if}
        <div>
           {$this->Block->getLocale('tieu_de_tab', $data_extend)} 
        </div>
	</h3>
{/if}

<div class="row tab_christmas">
    <div class="col-12 col-lg-8 title-tab mb-4 mb-lg-0">
        <div class="bg_christmas rounded" {if !empty($data_extend['locale'][{LANGUAGE}]['anh_nen'])}nh-lazy="image-background" data-src="{$this->Utilities->ReplaceVariableSystem($this->Block->getLocale('anh_nen', $data_extend))}"{/if}>
            {if !empty($data_block.data)}
                <ul class="block-tab nav effect-nav christmas_left">
                    {foreach from = $data_block.data item = tab}
                        <li class="nav-item">
                            <a class="nav-link{if $tab@first} active{/if}" data-toggle="tab" href="#{$tab_id}-{$tab@index}">
                                {if !empty($tab.image_avatar)}
                                    {assign var = url_img value = "{CDN_URL}{$this->Utilities->getThumbs($tab.image_avatar, 150)}"}
                                {else}
                                    {assign var = url_img value = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}
                                {/if}

                                {$this->LazyLoad->renderImage([
                                    'src' => $url_img, 
                                    'alt' => $tab.name, 
                                    'class' => 'img-fluid christmas_image_left',
                                    'ignore' => true
                                ])}
                            </a>
                        </li>
                    {/foreach}
                </ul>
            {/if}
        </div>
    </div>
    
    <div class="col-12 col-lg-4">
        {if !empty($data_block.data)}
            <div class="title-tab swiper mb-2" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
                <ul class="block-tab nav effect-nav swiper-wrapper flex-nowrap">
                    {foreach from = $data_block.data item = tab}
                        <li class="nav-item swiper-slide">
                            <a class="nav-link{if $tab@first} active{/if}" data-toggle="tab" href="#{$tab_id}-{$tab@index}">
                                {if !empty($tab.image_avatar)}
                                    {assign var = url_img value = "{CDN_URL}{$this->Utilities->getThumbs($tab.image_avatar, 150)}"}
                                {else}
                                    {assign var = url_img value = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}
                                {/if}

                                <div class="christmas_item">
                                    {$this->LazyLoad->renderImage([
                                        'src' => $url_img, 
                                        'alt' => $tab.name, 
                                        'class' => 'img-fluid',
                                        'ignore' => true
                                    ])}
                                    <span class="block-line-clamp-2">
                                        {$tab.name}
                                    </span>
                                </div>
                            </a>
                        </li>
                    {/foreach}
                </ul>
            </div>
        
            <div class="tab-content christmas_product">
                {foreach from = $data_block.data item = tab}
                    <div {if $tab@first}loaded="1"{/if} id="{$tab_id}-{$tab@index}" class="tab-pane {if $tab@first}active{else}fade{/if}">
                        {$products = $this->Product->getProducts([
            	            'filter' => [
            	                'id_categories' => [$tab.id]
            	            ]
            	        ])}
    	        
            	        {if !empty($products)}
                	        <div class="row">
                	            {foreach from = $products item = product}
                                    {$this->element("../block/product/item_christmas", [
                                        'product' => $product,
                                        'ignore_lazy' => true,
                                        'col' => 'col-12'
                                    ])}
                                {/foreach}
                	        </div>
                        {/if}
                    </div>
                {/foreach}
            </div>
        {/if}
    </div>
</div>
{/strip}
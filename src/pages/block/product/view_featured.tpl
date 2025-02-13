{strip}
{assign var = col value = ""}
{if !empty($data_extend['col'])}
    {assign var = col value = $data_extend['col']}
{/if}

{assign var = item value = "item_featured"}
{if !empty($data_extend['item'])}
    {assign var = item value = $data_extend['item']}
{/if}

{assign var = ignore_lazy value = false}
{if !empty($data_extend.ignore_lazy)}
    {assign var = ignore_lazy value = $data_extend.ignore_lazy}
{/if}

{if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de'])}
	<h3 class="title-section bd_section_category after_bottom-x-0 d-flex align-items-center mb-0">
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

{assign var = products value = $this->Product->getProducts([
    {FILTER} => [
        'featured' => 1
    ],
    {SORT} => [
       {FIELD} => 'featured'
    ],
    limit => 12
], {LANGUAGE})}

{if !empty($products)}
    <div class="featured_proudct">
        <div class="swiper p-lg-1" nh-swiper="{if !empty($data_extend.slider)}{htmlentities($data_extend.slider|@json_encode)}{/if}">
            <div class="swiper-wrapper">
                {foreach from = $products item = product}
                    {$this->element("../block/{$block_type}/{$item}", [
                        'product' => $product, 
                        'is_slider' => true,
                        'ignore_lazy' => $ignore_lazy
                    ])}
                {/foreach}
            </div>
            {if !empty($data_extend.slider.pagination)}
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            {/if}
            {if !empty($data_extend.slider.navigation)}
                <div class="swiper-button-next">
                    <i class="fa-light fa-angle-right h1"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="fa-light fa-angle-left h1"></i>
                </div>
            {/if}
            
            {if !empty($data_extend['locale'][{LANGUAGE}]['url_xem_them'])}
                <div class="text-center pt-4">
                    <a class="read_more" href="{$this->Block->getLocale('url_xem_them', $data_extend)}">
                        {__d('template', 'xem_them')} 
                    </a>
                </div>
            {/if}
        </div>
    </div>
{else}
    <div class="mb-4">
        {__d('template', 'khong_co_du_lieu')}
    </div>
{/if}
{/strip}
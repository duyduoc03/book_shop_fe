{strip}
{assign var = ignore value = false}
{if !empty($ignore_lazy)}
    {assign var = ignore value = $ignore_lazy}
{/if}
{if empty($is_slider)}
<div class="{if !empty($col)}{$col}{else}col-lg-3 col-md-6 col-6 mb-5{/if}">
{/if}
    <div nh-product="{if !empty($product.id)}{$product.id}{/if}" nh-product-item-id="{if !empty($product.items[0])}{$product.items[0].id}{/if}" nh-product-attribute-special="{if !empty($product.attributes_item_special)}{htmlentities($product.attributes_item_special|@json_encode)}{/if}" class="product-item bg-white overflow-hidden product-item swiper-slide shadow_hover mt-0 mb-4">
        <div class="inner-image">
            <div class="product-status">
                {if !empty($product.apply_special) && !empty($product.discount_percent)}
                    <span class="onsale">
                        -{$product.discount_percent}%
                    </span>
                {/if}
                
                {if !empty($product.featured)}
                    <span class="featured">
                        {__d('template', 'noi_bat')}
                    </span>
                {/if}
                
                {if isset($product.total_quantity_available) && $product.total_quantity_available <= 0 && !empty($data_init.product.check_quantity)}
                    <span class="out-stock">
                        {__d('template', 'het_hang')}
                    </span>
                {/if}
            </div>
            <div class="ratio-1-1">
                {if !empty($product['all_images'][0])}
                    {assign var = url_img value = "{CDN_URL}{$this->Utilities->getThumbs($product['all_images'][0], 350)}"}
                {else}
                    {assign var = url_img value = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="}
                {/if}

                <a href="{$this->Utilities->checkInternalUrl($product.url)}" title="{$product.name}">
                    {$this->LazyLoad->renderImage([
                        'src' => $url_img, 
                        'alt' => $product.name, 
                        'class' => 'img-fluid',
                        'ignore' => $ignore
                    ])}
                </a>
            </div>
        </div>
        
        <div class="inner-content pt-4">
            {if !empty($product.name)}
                <h4 class="product-title line-clamp-2">
                    <a href="{$this->Utilities->checkInternalUrl($product.url)}">
                        {$product.name|escape}
                    </a>
                </h4>
            {/if}

            <div class="price mt-2">                        
                <span class="price-amount">
                    {if empty($product.apply_special) && !empty($product.price)}
                        {$product.price|number_format:0:".":","}
                        <span class="currency-symbol">đ</span>
                    {/if}

                    {if !empty($product.apply_special) && !empty($product.price_special)}
                        {$product.price_special|number_format:0:".":","}
                        <span class="currency-symbol">đ</span>
                    {/if}
                </span>                        

                {if !empty($product.apply_special) && !empty($product.price)}
                    <span class="price-amount old-price">
                        {$product.price|number_format:0:".":","}
                        <span class="currency-symbol">đ</span>
                    </span>
                {/if}
            </div>
        </div>      
    </div>
{if empty($is_slider)}
</div>
{/if}
{/strip}
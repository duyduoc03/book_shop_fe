{strip}
{assign var = ignore value = false}
{if !empty($ignore_lazy)}
    {assign var = ignore value = $ignore_lazy}
{/if}
{if empty($is_slider)}
<div class="{if !empty($col)}{$col}{else}col-lg-3 col-md-6 col-6 mb-5{/if}">
{/if}
    <div nh-product="{$product.id}" nh-product-item-id="{if !empty($product.items[0])}{$product.items[0].id}{/if}" nh-product-attribute-special="{if !empty($product.attributes_item_special)}{htmlentities($product.attributes_item_special|@json_encode)}{/if}" class="product-item christmas-product_item bg-white overflow-hidden swiper-slide">
        <div class="inner-image">
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
        
        <div class="inner-content p-3">
            <h4 class="product-title line-clamp-2">
                <a href="{$this->Utilities->checkInternalUrl($product.url)}">
                    {$product.name|escape}
                </a>
            </h4>
            
            <div class="d-flex flex-wrap">
                <div class="price mt-2 mr-auto">                        
                    <span class="price-amount fs-15">
                        {if empty($product.items[0].apply_special) && !empty($product.items[0].price)}
                            {$product.items[0].price|number_format:0:".":","}
                            <span class="currency-symbol">đ</span>
                        {/if}
    
                        {if !empty($product.items[0].apply_special) && !empty($product.items[0].price_special)}
                            {$product.items[0].price_special|number_format:0:".":","}
                            <span class="currency-symbol">đ</span>
                        {/if}
                    </span>                        
    
                    {if !empty($product.items[0].apply_special) && !empty($product.items[0].price)}
                        <span class="price-amount old-price fs-13">
                            {$product.items[0].price|number_format:0:".":","}
                            <span class="currency-symbol">đ</span>
                        </span>
                    {/if}
                </div>
                <div class="align-self-end">
                    {if !empty($product.total_quantity_available) || empty($data_init.product.check_quantity)}
                        {assign var = add_cart value = "nh-btn-action='add-cart'"}
                        {assign var = title_cart value = "{__d('template', 'them_gio_hang')}"}
                        {if !empty($product.attributes_item_special) && ($product.number_item gte 2)}
                            {assign var = title_cart value = "{__d('template', 'xem_chi_tiet')}"}
                        {/if}
    
                        {assign var = link_cart value = "javascript:;"}
                        {if !empty($product.attributes_item_special) && !empty($product.url) && ($product.number_item gte 2)}
                            {assign var = link_cart value = "{$this->Utilities->checkInternalUrl($product.url)}"}
                            {assign var = add_cart value = ""}
                        {/if}
    
                        <a {$add_cart} class="btn-product-action christmas_cart" href="{$link_cart}" title="{$title_cart}">
                            <i class="fa-light fa-cart-shopping"></i>
                            <span>{__d('template', 'them_gio_hang')}</span>
                        </a>                    
                    {else}
                        <a class="btn-product-action christmas_cart" href="{$this->Utilities->checkInternalUrl($product.url)}" title="{__d('template', 'xem_chi_tiet')}">
                            <i class="fa-light fa-cart-shopping"></i>
                            <span>{__d('template', 'them_gio_hang')}</span>
                        </a>
                    {/if}
                </div>
            </div>
        </div>      
    </div>
{if empty($is_slider)}
</div>
{/if}
{/strip}
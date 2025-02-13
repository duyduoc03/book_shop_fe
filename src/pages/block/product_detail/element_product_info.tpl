{assign var = first_item value = []}
{if !empty($product.items[0])}
    {assign var = first_item value = $product.items[0]}
{/if}

{assign var = rating value = 0}
{if !empty($product.rating)}
    {math assign = rating equation = 'x*y' x = $product.rating y = 20} 
{/if}

{if !empty($product.attributes)}
    {$attr = $product.attributes}
{/if}

<div nh-product-detail nh-product="{if !empty($product.id)}{$product.id}{/if}" nh-product-item-id="{if !empty($first_item)}{$first_item.id}{/if}" nh-product-attribute-special="{if !empty($product.attributes_item_special)}{htmlentities($product.attributes_item_special|@json_encode)}{/if}" class="product-content-detail">

    {if !empty($product.name)}
		<h1 class="product-title-detail mb-3">
			{$product.name|escape}
            <span nh-label-extend-name>{if !empty($first_item.extend_name)}({$first_item.extend_name}){/if}</span>
        </h1>
    {/if}

    {* Thông tin chính *} 
    <div class="row">
        {if !empty($product.brand_name)}
            <div class="col-12 col-sm-6">
                <div class="brand mb-2">
                    <label>
                        {__d('template', 'thuong_hieu')}:
                    </label>
                    <span>
                    	<b>{$product.brand_name}</b>
                    </span>
                </div>
            </div>
        {/if}
        
        {if !empty($attr.xuatxu.value)}
            <div class="col-12 col-sm-6">
                <div class="brand mb-2">
                    <label>
                        {$attr.xuatxu.name}:
                    </label>
                    <span>
                    	<b>{$attr.xuatxu.value}</b>
                    </span>
                </div>
            </div>
        {/if}
        
        {if !empty($attr.nhaxuatban.value)}
            <div class="col-12 col-sm-6">
                <div class="brand mb-2">
                    <label>
                        {$attr.nhaxuatban.name}:
                    </label>
                    <span>
                    	<b>{$attr.nhaxuatban.value}</b>
                    </span>
                </div>
            </div>
        {/if}
        
        {if !empty($attr.tacgia.value)}
            <div class="col-12 col-sm-6">
                <div class="brand mb-2">
                    <label>
                        {$attr.tacgia.name}:
                    </label>
                    <span>
                    	<b>{$attr.tacgia.value}</b>
                    </span>
                </div>
            </div>
        {/if}
    </div>

    {* Điểm số đánh giá và bình luận*}
    <div class="product-rating d-flex align-items-center flex-nowrap">
        
        <div class="star-rating mr-2">
            <span style="width:{$rating}%"></span>
        </div>
        
        <a nh-to-anchor="rating" class="color-darkorange" href="rating">
            (<span class="count">{if !empty($product.rating_number)}{$product.rating_number|number_format:0:".":","}{else}0{/if}</span> {__d('template', 'danh_gia')})   
        </a>

        <div class="review-link ml-3">
            {if !empty($product.comment)}
                (<span class="count">
                    {$product.comment|number_format:0:".":","}
                </span> 
                {__d('template', 'khach_hang_da_binh_luan')})
            {/if}
        </div>
        
        {if !empty($attr.daban.value)}
            <div class="brand">
                <span class="da_ban">
                    {$attr.daban.name}
                </span>
                <span class="ml-0">
                	{$attr.daban.value}
                </span>
            </div>
        {/if}
    </div>
    
    {* Giá sản phẩm*}
    <div class="price mb-4">
    	{if empty($first_item.apply_special) && !empty($first_item.price)}
            <span nh-label-price="{$first_item.price}" class="price-amount">
                <span nh-label-value>
                    {$first_item.price|number_format:0:".":","}
                </span>                    
                <span class="currency-symbol">đ</span>
            </span>
        {/if}

        {if !empty($first_item.apply_special) && !empty($first_item.price_special)}
        	<span nh-label-price="{$first_item.price_special}" class="price-amount">
                <span nh-label-value>
                    {$first_item.price_special|number_format:0:".":","}
                </span>                    
                <span class="currency-symbol">đ</span>
            </span>
        {/if}

        {assign var = old_price value = ""}
        {assign var = show_old_price value = "d-none"}
        {if !empty($first_item.price) && !empty($first_item.apply_special)}
            {assign var = old_price value = $first_item.price}
            {assign var = show_old_price value = ""}
        {/if}
        <span nh-label-price-special="{$old_price}" class="price-amount old-price {$show_old_price}">
            <span nh-label-value>
                {if !empty($first_item.price) && !empty($first_item.apply_special)}
                    {$first_item.price|number_format:0:".":","}
                {/if}
            </span>
            <span class="currency-symbol">đ</span>
        </span>
    </div>
    
    {* Thuộc tính phiên bản sản phẩm*}
    {$this->element("../block/product_detail/element_attribute_item", [
        'product' => $product,
        'first_item' => $first_item
    ])}
    {* Thêm giỏ hàng *}
    {if !empty($product.status) && $product.status == 1}
        <div class="{if (isset($first_item.quantity_available) && $first_item.quantity_available <= 0 || empty($first_item.quantity_available)) && !empty($data_init.product.check_quantity)}d-none{/if}">
            {$this->element('input_quantity', [
                'first_item' => $first_item,
                'check_quantity' => true
            ])}
            <div class="btn-cart-buy d-flex flex-wrap">
                <a nh-btn-action="add-cart" href="javascript:;" class="add-to-cart mr-3 mb-4">
                    {__d('template', 'them_gio_hang')}
                </a>
                 <a nh-btn-action="add-cart" nh-redirect="/order/info" href="javascript:;" class="add-to-cart add-to-cart-buy mr-3 mb-4">
                    {__d('template', 'mua_ngay')}
                </a> 
                <a nh-btn-action="wishlist" wishlist-id="{if !empty($product.id)}{$product.id}{/if}" wishlist-type="{PRODUCT}" class="wishlist-action mb-4" href="javascript:;" title="{__d('template', 'yeu_thich')}">
                    <i class="fa-light fa-heart"></i>
                </a>
            </div>
        </div>

        <div nh-quantity-product="out-stock" class="out-of-stock mb-4 {if (!empty($first_item.quantity_available) && $first_item.quantity_available > 0) || empty($data_init.product.check_quantity)}d-none{/if}">
            {__d('template', 'san_pham_het_hang')}
        </div>    	
    {else}
        <div class="out-of-stock mb-4">
            {__d('template', 'san_pham_ngung_kinh_doanh')}
        </div>
    {/if}
</div>
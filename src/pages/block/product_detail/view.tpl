{assign var = product value = []}
{if !empty($data_block.data)}
	{assign var = product value = $data_block.data}
{/if}

{if !empty($product)}
	{strip}
	<ol data-toc="div.product-detail-footer" data-toc-headings="h2,h3,h4" class="mb-0"></ol>

	<div class="product-detail-head row">
		<div class="col-lg-5">
			{$this->element("../block/product_detail/element_product_image", [
                'product' => $product
            ])}
		</div>

		<div class="col-lg-7">
			{$this->element("../block/product_detail/element_product_info", [
                'product' => $product
            ])}
            
            {$this->element("../block/product_detail/element_product_content", [
                'product' => $product
            ])}
		</div>
	</div>
{else}
	<p class="text-center font-danger my-4">{__d('template', 'thong_tin_san_pham_khong_ton_tai')}</p>
{/if}
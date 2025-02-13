{assign var = product value = []}
{if !empty($data_block.data)}
	{assign var = product value = $data_block.data}
{/if}

{if !empty($product)}
    {*{strip}
	{$this->element("../block/product_detail/element_product_content", [
        'product' => $product
    ])}*}
{else}
	<p class="text-center font-danger my-4">{__d('template', 'thong_tin_san_pham_khong_ton_tai')}</p>
{/if}
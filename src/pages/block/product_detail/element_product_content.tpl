{if !empty($product.content)}
  	<div class="product-detail-footer my-4">
  	    <h5 class="font-weight-bold mb-4">
  	        {__d('template', 'thong_tin_chi_tiet')}
  	    </h5>
  		<div class="product_content">
  			{$this->LazyLoad->renderContent($product.content)}
  		</div>
  	</div>
{/if}

{if !empty($product.description)}
  	<div class="product-detail-footer my-4">
  	    <h5 class="font-weight-bold mb-4">
  	        {__d('template', 'mo_ta_san_pham')}
  	    </h5>
  		<div class="product-detail-description">
  			{$this->LazyLoad->renderContent($product.description)}
  		</div>
  	</div>
{/if}
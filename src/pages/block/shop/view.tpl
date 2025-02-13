{strip}
{if !empty($data_block.data)}
    <div class="shops-system" nh-shops>
        <div class="row">
            <div class="col-md-5 col-lg-4 col-xs-12 col-12">
                {if !empty($data_extend['locale'][{LANGUAGE}]['tieu_de'])}
                    <div class="branch-section text-white text-uppercase mb-0">
                        {$this->Block->getLocale('tieu_de', $data_extend)}
                    </div>
                {/if}
                
                <div class="list-shop">
                    <div class="filter">
                        <div class="form-group">
                            {$this->Form->select('city_id', $this->Location->getListCitiesForDropdown(), ['id' => 'city_id', 'empty' => "-- {__d('template', 'tinh_thanh')} --", 'default' => '', 'class' => 'form-control selectpicker', 'data-size' => 6, 'data-live-search' => true])}
                        </div>

                        <div class="form-group">
                            {$this->Form->select('district_id', $this->Location->getListDistrictForDropdown(), ['id' => 'district_id', 'empty' => "-- {__d('template', 'quan_huyen')} --", 'default' => '', 'class' => 'form-control selectpicker', 'data-size' => 6, 'data-live-search' => true])}
                        </div>
                    </div>

                    <div class="list branch-box">
                        {$this->element("../Shop/item_list", [
                            'shops' => $data_block.data
                        ])}
                    </div>
                </div>
            </div>

            <div class="col-md-7 col-lg-8 col-xs-12 col-12">
                <div class="map-info ratio-4-3">
                    {foreach from=$data_block.data item=shop key=key}
                        {if !$shop@first}{continue}{/if}
                        
                        {if !empty($shop.gmap)}
                            {$shop.gmap}
                        {else if !empty($shop.address)}
                            <iframe src="https://maps.google.com/maps?hl=en&q={$shop.address}&t=p&z=14&ie=UTF8&iwloc=B&output=embed" frameborder="0"></iframe>
                        {/if}
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
{/if}
{/strip}
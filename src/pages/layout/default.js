import React from "react";
import { Helmet } from "react-helmet-async";
import "../assets/css/bootstrap.css";
import "../assets/css/swiper.css";
import "../assets/lib/fontawesome/css/fontawesome.css";
import "../assets/lib/fontawesome/css/light.css";
import "../assets/lib/fontawesome/css/solid.css";
import "../assets/lib/fontawesome/css/brands.css";
import "../assets/css/lightgallery.css";
import "../assets/css/variable.css";
import "../assets/css/compare.css";
import "../assets/css/page.css";
import "../assets/css/utilities.css";
import "../assets/css/custom.css";

const DefaultLayout = ({ children, title, description }) => {
  return (
    <div className="home">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="keywords" content="" />
        <meta charSet="utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="..\favicon.ico" rel="icon" type="image/x-icon"/>
      </Helmet>
      <header>
        <div nh-row="6uqv1wl" class="bg-red d-none d-lg-blog">
            <div class="row no-gutters">
                <div class="col-md-12 col-12">
                    <div class="">
                        <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                            nh-swiper="{lazy:true,slidesPerView:1}">
                            <div class="swiper-wrapper" id="swiper-wrapper-db97e53e45f6faca" aria-live="polite"
                                style="transition-duration: 0ms;">
                                <div class="swiper-slide text-center"><a href="" title="Banner 1"><img
                                            src="/templates/vppham03/assets/media/banner/header_banner.png"
                                            class="img-fluid" alt="Banner 1"/></a></div>
                            </div><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div nh-row="8s0j1bd" class="setting-menu row-align-center py-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <div class="">
                            <div class="logo-section"><a href="/" class="active"><span
                                        class="logo_title">Vanphongpham</span></a></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="">
                            <div class="menu_main d-none d-lg-block"><span class="vertical-tool"><i
                                        class="fa-light fa-grid-2"></i></span>
                                <div class="menu_main_container container">
                                    <div class="menu_main_content">
                                        <div class="row">
                                            <div class="menu_main_left col-3">
                                                <h4 class="menu_cate_title">Danh mục sản phẩm</h4>
                                                <ul class="nav d-block" id="tabs-nav">
                                                    <li class="nav-item"><a class="tab_title active"
                                                            href="#menu-1739459769-365-0">Văn phòng phẩm</a></li>
                                                    <li class="nav-item"><a class="tab_title"
                                                            href="#menu-1739459769-365-1">Sách trong nước</a></li>
                                                    <li class="nav-item"><a class="tab_title"
                                                            href="#menu-1739459769-365-2">Đồ dùng Lifestyle - Quà tặng</a>
                                                    </li>
                                                    <li class="nav-item"><a class="tab_title"
                                                            href="#menu-1739459769-365-3">Đồ chơi</a></li>
                                                    <li class="nav-item"><a class="tab_title"
                                                            href="#menu-1739459769-365-4">Merry Christmas</a></li>
                                                </ul>
                                            </div>
                                            <div class="menu_main_right col-9" id="tabs-content">
                                                <div id="menu-1739459769-365-0" class="menu_tab-content" style="">
                                                    <div class="d-flex align-items-center mb-5"><img
                                                            class="img-fluid category_icon mr-3"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/icon_sachthieunhi_120x120_thumb_150.webp"
                                                            alt="Văn phòng phẩm"/>
                                                        <h4 class="menu_cate_title">Văn phòng phẩm</h4>
                                                    </div>
                                                    <div class="menu_category row">
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/but">Bút</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/but-sap">Bút sáp</a></li>
                                                                <li><a class="line-clamp-1" href="/but-bi">Bút bi</a></li>
                                                                <li><a class="line-clamp-1" href="/but-chi">Bút chì</a></li>
                                                                <li><a class="line-clamp-1" href="/but-xoa">Bút xoá</a></li>
                                                                <li><a class="line-clamp-1" href="/but-long">Bút lông</a>
                                                                </li>
                                                            </ul><a class="fs-13" href="/but">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/giay">Giấy</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/giay-in">Giấy in</a></li>
                                                                <li><a class="line-clamp-1" href="/vo-o-ly">Vở ô ly</a></li>
                                                                <li><a class="line-clamp-1" href="/bia-giay">Bìa Giấy</a>
                                                                </li>
                                                                <li><a class="line-clamp-1" href="/giay-ghi-chu">Giấy ghi
                                                                        chú</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/giay-tap-va-ghi-chep">Giấy tập và ghi
                                                                        chép</a></li>
                                                            </ul><a class="fs-13" href="/giay">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/bang">Bảng</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/bang-hoc-sinh">Bảng học
                                                                        sinh</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/bang-trang-van-phong">Bảng trắng văn
                                                                        phòng</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/bang-den-truyen-thong">Bảng đen truyền
                                                                        thống</a></li>
                                                                <li><a class="line-clamp-1" href="/bang-ghim">Bảng ghim</a>
                                                                </li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/bang-lich-va-lap-ke-hoach">Bảng lịch và lập
                                                                        kế hoạch</a></li>
                                                            </ul><a class="fs-13" href="/bang">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/my-thuat">Mỹ Thuật</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/giay-ve">Giấy vẽ</a></li>
                                                                <li><a class="line-clamp-1" href="/mau-ve">Màu vẽ</a></li>
                                                                <li><a class="line-clamp-1" href="/co-ve">Cọ vẽ</a></li>
                                                                <li><a class="line-clamp-1" href="/dung-cu-dieu-khac">Dụng
                                                                        cụ điêu khắc</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/bang-pha-mau-va-phu-kien">Bảng pha màu và phụ
                                                                        kiện</a></li>
                                                            </ul><a class="fs-13" href="/my-thuat">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/lich-ban">Lịch bàn</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1"
                                                                        href="/lich-ban-truyen-thong">Lịch bàn truyền
                                                                        thống</a></li>
                                                                <li><a class="line-clamp-1" href="/lich-ban-sang-tao">Lịch
                                                                        bàn sáng tạo</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/lich-ban-doanh-nghiep">Lịch bàn doanh
                                                                        nghiệp</a></li>
                                                                <li><a class="line-clamp-1" href="/lich-ban-ke-hoach">Lịch
                                                                        bàn kế hoạch</a></li>
                                                            </ul><a class="fs-13" href="/lich-ban">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/dao-doc-giay">Dao dọc giấy</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/dao-doc-giay-mini">Dao
                                                                        dọc giấy mini</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/dao-doc-giay-luoi-lon">Dao dọc giấy lưỡi
                                                                        lớn</a></li>
                                                                <li><a class="line-clamp-1" href="/luoi-dao-thay-the">Lưỡi
                                                                        dao thay thế</a></li>
                                                                <li><a class="line-clamp-1" href="/dao-doc-giay-an-toan">Dao
                                                                        dọc giấy an toàn</a></li>
                                                            </ul><a class="fs-13" href="/dao-doc-giay">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/san-pham-den-hoc">Sản phẩm đèn học</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/den-hoc-de-ban">Đèn học
                                                                        để bàn</a></li>
                                                                <li><a class="line-clamp-1" href="/den-hoc-chong-can">Đèn
                                                                        học chống cận</a></li>
                                                                <li><a class="line-clamp-1" href="/den-hoc-led">Đèn học
                                                                        LED</a></li>
                                                                <li><a class="line-clamp-1" href="/den-hoc-cam-ung">Đèn học
                                                                        cảm ứng</a></li>
                                                            </ul><a class="fs-13" href="/san-pham-den-hoc">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/bam-kim">Bấm kim</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/bam-kim-mini">Bấm kim
                                                                        mini</a></li>
                                                                <li><a class="line-clamp-1" href="/bam-kim-co-lon">Bấm kim
                                                                        cỡ lớn</a></li>
                                                                <li><a class="line-clamp-1" href="/bam-kim-xoay-360-do">Bấm
                                                                        kim xoay 360 độ</a></li>
                                                            </ul><a class="fs-13" href="/bam-kim">Xem tất cả</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu-1739459769-365-1" class="menu_tab-content"
                                                    style="display: none;">
                                                    <div class="d-flex align-items-center mb-5"><img
                                                            class="img-fluid category_icon mr-3"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/book-png_thumb_150.png"
                                                            alt="Sách trong nước"/>
                                                        <h4 class="menu_cate_title">Sách trong nước</h4>
                                                    </div>
                                                    <div class="menu_category row">
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/van-hoc">Văn học</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/tieu-thuyet">Tiểu
                                                                        thuyết</a></li>
                                                                <li><a class="line-clamp-1" href="/ngon-tinh">Ngôn tình</a>
                                                                </li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/truyen-ngan-tan-van">Truyện ngắn - Tản
                                                                        văn</a></li>
                                                            </ul><a class="fs-13" href="/van-hoc">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/kinh-te">Kinh tế</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/quan-tri-lanh-dao">Quản
                                                                        trị - Lãnh đạo</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/marketing-ban-hang">Marketing - Bán hàng</a>
                                                                </li>
                                                                <li><a class="line-clamp-1" href="/phan-tich-kinh-te">Phân
                                                                        tích kinh tế</a></li>
                                                            </ul><a class="fs-13" href="/kinh-te">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/tam-ly-ky-nang-song">Tâm lý - Kỹ năng sống</a>
                                                            </h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/ky-nang-song">Kỹ năng
                                                                        sống</a></li>
                                                                <li><a class="line-clamp-1" href="/ren-luyen-nhan-cach">Rèn
                                                                        luyện nhân cách</a></li>
                                                                <li><a class="line-clamp-1" href="/tam-ly">Tâm lý</a></li>
                                                            </ul><a class="fs-13" href="/tam-ly-ky-nang-song">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/nuoi-day-con">Nuôi dạy con</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/cam-nang-lam-cha-me">Cẩm
                                                                        nang làm cha mẹ</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/phuong-phap-giao-duc-tre-cac-nuoc">Phương
                                                                        pháp giáo dục trẻ các nước</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/phat-trien-tri-tue-cho-tre">Phát triển trí
                                                                        tuệ cho trẻ</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/phat-trien-ky-nang-cho-tre">Phát triển kỹ
                                                                        năng cho trẻ</a></li>
                                                            </ul><a class="fs-13" href="/nuoi-day-con">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/sach-thieu-nhi">Sách thiếu nhi</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/manga-comic">Manga -
                                                                        Comic</a></li>
                                                                <li><a class="line-clamp-1" href="/kien-thuc-bach-khoa">Kiến
                                                                        thức bách khoa</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/sach-tranh-ky-nang-song-cho-tre">Sách tranh
                                                                        kỹ năng sống cho trẻ</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/vua-hoc-vua-chua-voi-tre">Vừa học vừa chưa
                                                                        với trẻ</a></li>
                                                            </ul><a class="fs-13" href="/sach-thieu-nhi">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/tieu-su-hoi-ky">Tiểu sử - Hồi ký</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/cau-chuyen-cuoc-doi">Câu
                                                                        chuyện cuộc đời</a></li>
                                                                <li><a class="line-clamp-1" href="/chinh-tri">Chính trị</a>
                                                                </li>
                                                                <li><a class="line-clamp-1" href="/nghe-thuat-giai-tri">Nghệ
                                                                        thuật - Giải trí</a></li>
                                                            </ul><a class="fs-13" href="/tieu-su-hoi-ky">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/giao-khoa-tham-khao">Giáo khoa - Tham khảo</a>
                                                            </h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/sach-giao-khoa">Sách giáo
                                                                        khoa</a></li>
                                                                <li><a class="line-clamp-1" href="/sach-tham-khao">Sách tham
                                                                        khảo</a></li>
                                                                <li><a class="line-clamp-1" href="/luyen-thi-dai-hoc">Luyện
                                                                        thi đại học</a></li>
                                                                <li><a class="line-clamp-1" href="/mau-giao">Mẫu giáo</a>
                                                                </li>
                                                            </ul><a class="fs-13" href="/giao-khoa-tham-khao">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/sach-hoc-ngoai-ngu">Sách học ngoại ngữ</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/tieng-anh">Tiếng anh</a>
                                                                </li>
                                                                <li><a class="line-clamp-1" href="/tieng-nhat">Tiếng
                                                                        nhật</a></li>
                                                                <li><a class="line-clamp-1" href="/tieng-hoa">Tiếng hoa</a>
                                                                </li>
                                                                <li><a class="line-clamp-1" href="/tieng-han">Tiếng hàn</a>
                                                                </li>
                                                            </ul><a class="fs-13" href="/sach-hoc-ngoai-ngu">Xem tất cả</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu-1739459769-365-2" class="menu_tab-content"
                                                    style="display: none;">
                                                    <div class="d-flex align-items-center mb-5"><img
                                                            class="img-fluid category_icon mr-3"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/life-gift_thumb_150.png"
                                                            alt="Đồ dùng Lifestyle - Quà tặng"/>
                                                        <h4 class="menu_cate_title">Đồ dùng Lifestyle - Quà tặng</h4>
                                                    </div>
                                                    <div class="menu_category row">
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/tui-dung">Túi đựng</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/tui-giay-qua-tang">Túi
                                                                        giấy quà tặng</a></li>
                                                                <li><a class="line-clamp-1" href="/tui-vai-qua-tang">Túi vải
                                                                        quà tặng</a></li>
                                                                <li><a class="line-clamp-1" href="/tui-nhua-qua-tang">Túi
                                                                        nhựa quà tặng</a></li>
                                                                <li><a class="line-clamp-1"
                                                                        href="/phu-kien-tui-qua-tang">Phụ kiện túi quà
                                                                        tặng</a></li>
                                                            </ul><a class="fs-13" href="/tui-dung">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/thu-bong">Thú bông</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/thu-bong-mini">Thú bông
                                                                        mini</a></li>
                                                                <li><a class="line-clamp-1" href="/thu-bong-co-lon">Thú bông
                                                                        cỡ lớn</a></li>
                                                                <li><a class="line-clamp-1" href="/thu-bong-theo-chu-de">Thú
                                                                        bông theo chủ đề</a></li>
                                                                <li><a class="line-clamp-1" href="/phu-kien-thu-bong">Phụ
                                                                        kiện thú bông</a></li>
                                                            </ul><a class="fs-13" href="/thu-bong">Xem tất cả</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu-1739459769-365-3" class="menu_tab-content"
                                                    style="display: none;">
                                                    <div class="d-flex align-items-center mb-5"><img
                                                            class="img-fluid category_icon mr-3"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/ico-dochoi_1_thumb_150.png"
                                                            alt="Đồ chơi"/>
                                                        <h4 class="menu_cate_title">Đồ chơi</h4>
                                                    </div>
                                                    <div class="menu_category row">
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/do-choi-noi-bat">Đồ chơi nổi bật</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/xep-hinh-lap-ghep">Xếp
                                                                        hình - Lắp ghép</a></li>
                                                                <li><a class="line-clamp-1" href="/do-choi-giao-duc">Đồ chơi
                                                                        giáo dục</a></li>
                                                                <li><a class="line-clamp-1" href="/do-choi-dieu-khien">Đồ
                                                                        chơi điều khiển</a></li>
                                                                <li><a class="line-clamp-1" href="/board-game">Board
                                                                        Game</a></li>
                                                            </ul><a class="fs-13" href="/do-choi-noi-bat">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/mo-hinh-cac-loai">Mô hình các loại</a></h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/mo-hinh-giay">Mô hình
                                                                        giấy</a></li>
                                                                <li><a class="line-clamp-1" href="/mo-hinh-go">Mô hình
                                                                        gỗ</a></li>
                                                                <li><a class="line-clamp-1" href="/mo-hinh-nhan-vat">Mô hình
                                                                        nhân vật</a></li>
                                                                <li><a class="line-clamp-1" href="/mo-hinh-dong-vat">Mô hình
                                                                        động vật</a></li>
                                                            </ul><a class="fs-13" href="/mo-hinh-cac-loai">Xem tất cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/phuong-tien-cac-loai">Phương tiện các loại</a>
                                                            </h5>
                                                            <ul class="menu_sub_category list-unstyled mb-0">
                                                                <li><a class="line-clamp-1" href="/o-to">Ô tô</a></li>
                                                                <li><a class="line-clamp-1" href="/may-bay">Máy bay</a></li>
                                                                <li><a class="line-clamp-1" href="/tau-hoa">Tàu hoả</a></li>
                                                                <li><a class="line-clamp-1" href="/phuong-tien-khac">Phương
                                                                        tiện khác</a></li>
                                                            </ul><a class="fs-13" href="/phuong-tien-cac-loai">Xem tất
                                                                cả</a>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/do-choi-khac">Đồ chơi khác</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="menu-1739459769-365-4" class="menu_tab-content"
                                                    style="display: none;">
                                                    <div class="d-flex align-items-center mb-5"><img
                                                            class="img-fluid category_icon mr-3"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/merry-christmas/satan_noel_thumb_150.svg"
                                                            alt="Merry Christmas"/>
                                                        <h4 class="menu_cate_title">Merry Christmas</h4>
                                                    </div>
                                                    <div class="menu_category row">
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/do-choi-noel">Đồ Chơi Noel</a></h5>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/cay-thong">Cây Thông</a></h5>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/do-trang-tri">Đồ Trang Trí</a></h5>
                                                        </div>
                                                        <div class="col-3 mb-4">
                                                            <h5 class="sub_cate_title"><a class="line-clamp-1"
                                                                    href="/day-kim-tuyen">Dây Kim Tuyến</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu_main menu-container d-block d-lg-none"><span class="vertical-tool"
                                    nh-menu="btn-open" menu-type="cate"><i class="fa-light fa-grid-2"></i></span>
                                <nav class="menu-section" nh-menu="sidebar" menu-type="cate">
                                    <div class="menu-top"><span class="menu-header">Danh mục sản phẩm</span><a
                                            href="javascript:;" nh-menu="btn-close"
                                            class="close-sidebar effect-rotate icon-close"><i
                                                class="fa-solid fa-arrow-left"></i></a></div>
                                    <div class="d-flex">
                                        <div class="menu_main_left title-tab">
                                            <ul class="nav block-tab">
                                                <li class="nav-item w-100"><a class="nav-link d-block text-center active"
                                                        data-toggle="tab" href="#menu-mobile-1739459769-345-0"><img
                                                            class="img-fluid category_icon"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/icon_sachthieunhi_120x120_thumb_150.webp"
                                                            alt="Văn phòng phẩm"/>
                                                        <h5 class="menu_cate_title">Văn phòng phẩm</h5>
                                                    </a></li>
                                                <li class="nav-item w-100"><a class="nav-link d-block text-center"
                                                        data-toggle="tab" href="#menu-mobile-1739459769-345-1"><img
                                                            class="img-fluid category_icon"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/book-png_thumb_150.png"
                                                            alt="Sách trong nước"/>
                                                        <h5 class="menu_cate_title">Sách trong nước</h5>
                                                    </a></li>
                                                <li class="nav-item w-100"><a class="nav-link d-block text-center"
                                                        data-toggle="tab" href="#menu-mobile-1739459769-345-2"><img
                                                            class="img-fluid category_icon"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/life-gift_thumb_150.png"
                                                            alt="Đồ dùng Lifestyle - Quà tặng"/>
                                                        <h5 class="menu_cate_title">Đồ dùng Lifestyle - Quà tặng</h5>
                                                    </a></li>
                                                <li class="nav-item w-100"><a class="nav-link d-block text-center"
                                                        data-toggle="tab" href="#menu-mobile-1739459769-345-3"><img
                                                            class="img-fluid category_icon"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/categories/ico-dochoi_1_thumb_150.png"
                                                            alt="Đồ chơi"/>
                                                        <h5 class="menu_cate_title">Đồ chơi</h5>
                                                    </a></li>
                                                <li class="nav-item w-100"><a class="nav-link d-block text-center"
                                                        data-toggle="tab" href="#menu-mobile-1739459769-345-4"><img
                                                            class="img-fluid category_icon"
                                                            src="https://cdn3837.cdn-template-4s.com/thumbs/merry-christmas/satan_noel_thumb_150.svg"
                                                            alt="Merry Christmas"/>
                                                        <h5 class="menu_cate_title">Merry Christmas</h5>
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="menu_main_right tab-content">
                                            <div loaded="1" id="menu-mobile-1739459769-345-0" class="tab-pane active">
                                                <ul class="categories-section category_menu_mobile list-unstyled mb-0">
                                                    <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a></li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-37">Bút</a><span
                                                            nh-toggle="child-category-37" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-37"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/but-sap">Bút sáp</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/but-bi">Bút bi</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/but-chi">Bút chì</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/but-xoa">Bút xoá</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/but-long">Bút
                                                                    lông</a></li>
                                                            <li class="last_link"><a href="/but">Tất cả sản phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-40">Giấy</a><span
                                                            nh-toggle="child-category-40" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-40"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/giay-in">Giấy in</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/vo-o-ly">Vở ô ly</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/bia-giay">Bìa
                                                                    Giấy</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/giay-ghi-chu">Giấy
                                                                    ghi chú</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/giay-tap-va-ghi-chep">Giấy tập và ghi chép</a>
                                                            </li>
                                                            <li class="last_link"><a href="/giay">Tất cả sản phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-44">Bảng</a><span
                                                            nh-toggle="child-category-44" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-44"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/bang-hoc-sinh">Bảng
                                                                    học sinh</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/bang-trang-van-phong">Bảng trắng văn phòng</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/bang-den-truyen-thong">Bảng đen truyền thống</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/bang-ghim">Bảng
                                                                    ghim</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/bang-lich-va-lap-ke-hoach">Bảng lịch và lập kế
                                                                    hoạch</a></li>
                                                            <li class="last_link"><a href="/bang">Tất cả sản phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-46">Mỹ Thuật</a><span
                                                            nh-toggle="child-category-46" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-46"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/giay-ve">Giấy vẽ</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/mau-ve">Màu vẽ</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/co-ve">Cọ vẽ</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/dung-cu-dieu-khac">Dụng cụ điêu khắc</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/bang-pha-mau-va-phu-kien">Bảng pha màu và phụ
                                                                    kiện</a></li>
                                                            <li class="last_link"><a href="/my-thuat">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-53">Lịch bàn</a><span
                                                            nh-toggle="child-category-53" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-53"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/lich-ban-truyen-thong">Lịch bàn truyền thống</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/lich-ban-sang-tao">Lịch bàn sáng tạo</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/lich-ban-doanh-nghiep">Lịch bàn doanh nghiệp</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/lich-ban-ke-hoach">Lịch bàn kế hoạch</a></li>
                                                            <li class="last_link"><a href="/lich-ban">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-41">Dao dọc giấy</a><span
                                                            nh-toggle="child-category-41" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-41"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/dao-doc-giay-mini">Dao dọc giấy mini</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/dao-doc-giay-luoi-lon">Dao dọc giấy lưỡi lớn</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/luoi-dao-thay-the">Lưỡi dao thay thế</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/dao-doc-giay-an-toan">Dao dọc giấy an toàn</a>
                                                            </li>
                                                            <li class="last_link"><a href="/dao-doc-giay">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-8">Sản phẩm đèn học</a><span
                                                            nh-toggle="child-category-8" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-8"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/den-hoc-de-ban">Đèn
                                                                    học để bàn</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/den-hoc-chong-can">Đèn học chống cận</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/den-hoc-led">Đèn học
                                                                    LED</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/den-hoc-cam-ung">Đèn
                                                                    học cảm ứng</a></li>
                                                            <li class="last_link"><a href="/san-pham-den-hoc">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-42">Bấm kim</a><span
                                                            nh-toggle="child-category-42" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-42"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/bam-kim-mini">Bấm
                                                                    kim mini</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/bam-kim-co-lon">Bấm
                                                                    kim cỡ lớn</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/bam-kim-xoay-360-do">Bấm kim xoay 360 độ</a></li>
                                                            <li class="last_link"><a href="/bam-kim">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="menu-mobile-1739459769-345-1" class="tab-pane fade">
                                                <ul class="categories-section category_menu_mobile list-unstyled mb-0">
                                                    <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a></li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-11">Văn học</a><span
                                                            nh-toggle="child-category-11" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-11"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/tieu-thuyet">Tiểu
                                                                    thuyết</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/ngon-tinh">Ngôn
                                                                    tình</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/truyen-ngan-tan-van">Truyện ngắn - Tản văn</a>
                                                            </li>
                                                            <li class="last_link"><a href="/van-hoc">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-12">Kinh tế</a><span
                                                            nh-toggle="child-category-12" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-12"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/quan-tri-lanh-dao">Quản trị - Lãnh đạo</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/marketing-ban-hang">Marketing - Bán hàng</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phan-tich-kinh-te">Phân tích kinh tế</a></li>
                                                            <li class="last_link"><a href="/kinh-te">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-13">Tâm lý - Kỹ năng sống</a><span
                                                            nh-toggle="child-category-13" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-13"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/ky-nang-song">Kỹ
                                                                    năng sống</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/ren-luyen-nhan-cach">Rèn luyện nhân cách</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/tam-ly">Tâm lý</a>
                                                            </li>
                                                            <li class="last_link"><a href="/tam-ly-ky-nang-song">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-14">Nuôi dạy con</a><span
                                                            nh-toggle="child-category-14" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-14"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/cam-nang-lam-cha-me">Cẩm nang làm cha mẹ</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phuong-phap-giao-duc-tre-cac-nuoc">Phương pháp
                                                                    giáo dục trẻ các nước</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phat-trien-tri-tue-cho-tre">Phát triển trí tuệ
                                                                    cho trẻ</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phat-trien-ky-nang-cho-tre">Phát triển kỹ năng
                                                                    cho trẻ</a></li>
                                                            <li class="last_link"><a href="/nuoi-day-con">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-15">Sách thiếu nhi</a><span
                                                            nh-toggle="child-category-15" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-15"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/manga-comic">Manga -
                                                                    Comic</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/kien-thuc-bach-khoa">Kiến thức bách khoa</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/sach-tranh-ky-nang-song-cho-tre">Sách tranh kỹ
                                                                    năng sống cho trẻ</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/vua-hoc-vua-chua-voi-tre">Vừa học vừa chưa với
                                                                    trẻ</a></li>
                                                            <li class="last_link"><a href="/sach-thieu-nhi">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-16">Tiểu sử - Hồi ký</a><span
                                                            nh-toggle="child-category-16" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-16"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/cau-chuyen-cuoc-doi">Câu chuyện cuộc đời</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/chinh-tri">Chính
                                                                    trị</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/nghe-thuat-giai-tri">Nghệ thuật - Giải trí</a>
                                                            </li>
                                                            <li class="last_link"><a href="/tieu-su-hoi-ky">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-17">Giáo khoa - Tham khảo</a><span
                                                            nh-toggle="child-category-17" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-17"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/sach-giao-khoa">Sách
                                                                    giáo khoa</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/sach-tham-khao">Sách
                                                                    tham khảo</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/luyen-thi-dai-hoc">Luyện thi đại học</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/mau-giao">Mẫu
                                                                    giáo</a></li>
                                                            <li class="last_link"><a href="/giao-khoa-tham-khao">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-18">Sách học ngoại ngữ</a><span
                                                            nh-toggle="child-category-18" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-18"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/tieng-anh">Tiếng
                                                                    anh</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/tieng-nhat">Tiếng
                                                                    nhật</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/tieng-hoa">Tiếng
                                                                    hoa</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/tieng-han">Tiếng
                                                                    hàn</a></li>
                                                            <li class="last_link"><a href="/sach-hoc-ngoai-ngu">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="last_link"><a href="/bam-kim">Tất cả sản phẩm</a></li>
                                                </ul>
                                            </div>
                                            <div id="menu-mobile-1739459769-345-2" class="tab-pane fade">
                                                <ul class="categories-section category_menu_mobile list-unstyled mb-0">
                                                    <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a></li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-48">Túi đựng</a><span
                                                            nh-toggle="child-category-48" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-48"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/tui-giay-qua-tang">Túi giấy quà tặng</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/tui-vai-qua-tang">Túi vải quà tặng</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/tui-nhua-qua-tang">Túi nhựa quà tặng</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phu-kien-tui-qua-tang">Phụ kiện túi quà tặng</a>
                                                            </li>
                                                            <li class="last_link"><a href="/tui-dung">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-52">Thú bông</a><span
                                                            nh-toggle="child-category-52" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-52"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/thu-bong-mini">Thú
                                                                    bông mini</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/thu-bong-co-lon">Thú
                                                                    bông cỡ lớn</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/thu-bong-theo-chu-de">Thú bông theo chủ đề</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phu-kien-thu-bong">Phụ kiện thú bông</a></li>
                                                            <li class="last_link"><a href="/thu-bong">Tất cả sản phẩm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="last_link"><a href="/sach-hoc-ngoai-ngu">Tất cả sản phẩm</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div id="menu-mobile-1739459769-345-3" class="tab-pane fade">
                                                <ul class="categories-section category_menu_mobile list-unstyled mb-0">
                                                    <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a></li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-28">Đồ chơi nổi bật</a><span
                                                            nh-toggle="child-category-28" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-28"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/xep-hinh-lap-ghep">Xếp hình - Lắp ghép</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/do-choi-giao-duc">Đồ
                                                                    chơi giáo dục</a></li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/do-choi-dieu-khien">Đồ chơi điều khiển</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/board-game">Board
                                                                    Game</a></li>
                                                            <li class="last_link"><a href="/do-choi-noi-bat">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-113">Mô hình các loại</a><span
                                                            nh-toggle="child-category-113" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-113"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/mo-hinh-giay">Mô
                                                                    hình giấy</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/mo-hinh-go">Mô hình
                                                                    gỗ</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/mo-hinh-nhan-vat">Mô
                                                                    hình nhân vật</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/mo-hinh-dong-vat">Mô
                                                                    hình động vật</a></li>
                                                            <li class="last_link"><a href="/mo-hinh-cac-loai">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="has-child"><a class="line-clamp-1" href="javascrip:;"
                                                            nh-toggle="child-category-112">Phương tiện các loại</a><span
                                                            nh-toggle="child-category-112" class="dropdown-toggle"></span>
                                                        <ul nh-toggle-element="child-category-112"
                                                            class="list-child category_menu_mobile list-unstyled mb-0">
                                                            <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/o-to">Ô tô</a></li>
                                                            <li class=""><a class="line-clamp-1" href="/may-bay">Máy bay</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1" href="/tau-hoa">Tàu hoả</a>
                                                            </li>
                                                            <li class=""><a class="line-clamp-1"
                                                                    href="/phuong-tien-khac">Phương tiện khác</a></li>
                                                            <li class="last_link"><a href="/phuong-tien-cac-loai">Tất cả sản
                                                                    phẩm</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class=""><a class="line-clamp-1" href="/do-choi-khac">Đồ chơi
                                                            khác</a></li>
                                                    <li class="last_link"><a href="/thu-bong">Tất cả sản phẩm</a></li>
                                                </ul>
                                            </div>
                                            <div id="menu-mobile-1739459769-345-4" class="tab-pane fade">
                                                <ul class="categories-section category_menu_mobile list-unstyled mb-0">
                                                    <li class="first_link"><a href="/san-pham">Tất cả sản phẩm</a></li>
                                                    <li class=""><a class="line-clamp-1" href="/do-choi-noel">Đồ Chơi
                                                            Noel</a></li>
                                                    <li class=""><a class="line-clamp-1" href="/cay-thong">Cây Thông</a>
                                                    </li>
                                                    <li class=""><a class="line-clamp-1" href="/do-trang-tri">Đồ Trang
                                                            Trí</a></li>
                                                    <li class=""><a class="line-clamp-1" href="/day-kim-tuyen">Dây Kim
                                                            Tuyến</a></li>
                                                    <li class="last_link"><a href="/phuong-tien-cac-loai">Tất cả sản
                                                            phẩm</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="">
                            <div class="search-box header_search">
                                <form action="/tim-kiem" method="get" autocomplete="off">
                                    <div class="position-relative"><input nh-auto-suggest="product" name="keyword"
                                            placeholder="Từ khóa tìm kiếm" type="text" class="form-control" value=""/><button
                                            nh-btn-submit="" class="btn btn-submit" type="submit"><i
                                                class="fa-light fa-magnifying-glass"></i></button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12">
                        <div class="">
                            <div class="entire-action-header"><a class="btn-action-header btn-mini-wishlist"
                                    title="Yêu thích" href="/yeu-thich"><i class="fa-light fa-heart"></i><span
                                        wishlist-total="all" class="items-number">0</span><span class="text-box">Yêu
                                        thích</span></a></div>
                        </div>
                        <div class="">
                            <div class="entire-action-header"><a class="btn-mini-cart btn-action-header" nh-mini-cart="open"
                                    title="Giỏ hàng" href="javascript:;"><i class="fa-light fa-cart-shopping"></i><span
                                        nh-total-quantity-mini-cart="" class="items-number">0</span><span
                                        class="text-box">Giỏ hàng</span></a></div>
                        </div>
                        <div class="">
                            <div nh-mini-member="" class="entire-action-header"><a class="btn-account btn-action-header"
                                    title="Tài khoản" href="javascript:;" data-toggle="modal" data-target="#login-modal"><i
                                        class="fa-light fa-user"></i><span class="text-box">Tài khoản</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>Footer chung</footer>
    </div>
  );
};

export default DefaultLayout;


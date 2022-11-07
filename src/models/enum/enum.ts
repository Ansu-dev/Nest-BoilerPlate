export enum MasterAuth {
    master = '최종관리자',
    manager = '관리자',
}

export enum Department {
    dev = '개발팀',
    design = '디자인팀',
    operation = '오퍼레이션팀',
    growth = '그로스팀',
    global = '글로벌팀',
    owner = '회사 운영팀'
}

export enum Currency {
    KRW = 'KRW',
    USD = 'USD'
}

export enum CouponType {
    single = 'single',
    multiple = 'multiple',
    auto = 'auto',
}

export enum DiscountType {
    percent = 'percent',
    amount = 'amount'
}

export enum Flatform {
    ko = 'ko',
    en = 'en'
}

export enum OrderDevice {
    mobile = 'Mobile',
    pc = 'PC'
}

export enum OrderStatus {
    stanby = 'stanby',
    paid = 'paid',
    confirmed = 'confirmed',
    cancelled = 'cancelled',
    refundRequest = 'refunRequest',
    refund = 'refund',
    refundCompleted = 'refundCompleted'
}

export enum PaymentType {
    inicis = 'inicis',
    kakao = 'kakao',
    naver = 'naver'
}

export enum PaymentMethod {
    bank = 'vbank',
    card = 'card',
}

export enum PaymentStatus {
    ready = 'ready',
    paid = 'paid',
    confirmed = 'confirmed',
    cancelled = 'cancelled'
}

export enum ProductStatus {
    registered = '승인 대기',
    confirmed = '판매중',
    stopped = '판매 중지',
    rejected = '승인 반려',
    deleted = '삭제',
    modified = '수정 대기',
}

export enum ProductGroupType {
    default = "default",
    pick = "MD's Pick"
}

export enum SellerStatus {
    registered = '승인 대기',
    confirmed = '승인 완료',
    required = '작가정보입력',
    modified = '수정',
    rejected = '반려'
}

export enum SellerNoticeType {
    notice = '기타',
    inspection = '정기점검',
    report = '트렌드 리포트',
    plan = '기획전',
}

export enum BusinessOption {
    personal = 'personal',
    business = 'business'
}

export enum SellerType {
    normal = 'normal',
    underage = 'underage',
    corporate = 'corporate'
}

export enum Tier {
    general = 'general',
    collaboration = 'collaboration',
    test = 'test',
    partner = 'partner'
}

export enum LedgerType {
    paypal = 'paypal',
    payoneer = 'payoneer',
    account = 'account'
}

export enum LedgerStatus {
    sale = 'sale',
    aggregate = 'aggregate',
    wait = 'wait',
    complete = 'complete'
}

export enum TaxStatus {
    unissued = 'unissued',
    issuing = 'issuing',
    issued = 'issued'
}

export enum Gender {
    male = "male",
    female = "female"
}

export enum AccountStatus {
    enable = "enable",
    disable = "disable",
    dormancy = "dormancy"
}

export enum AccountType {
    email = 'email',
    phone = 'phone',
    facebook = 'facebook',
    naver = 'naver',
    kakao = 'kakao',
    apple = 'apple',
    google = 'google'
}
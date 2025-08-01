import tokens from '../../tokens.json'

// 토큰에서 값을 추출하는 함수
export function getTokenValue(path: string): any {
  const keys = path.split('.')
  let current: any = tokens
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return null
    }
  }
  
  return current?.value || current
}

// 색상 토큰 가져오기
export function getColorToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value || '#000000'
}

// 폰트 패밀리 토큰 가져오기
export function getFontFamilyToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value || 'Inter, sans-serif'
}

// 폰트 크기 토큰 가져오기
export function getFontSizeToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value ? `${value}px` : '16px'
}

// 폰트 웨이트 토큰 가져오기
export function getFontWeightToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value || '400'
}

// 간격 토큰 가져오기
export function getSpacingToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value ? `${value}px` : '0px'
}

// 테두리 반경 토큰 가져오기
export function getBorderRadiusToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value ? `${value}px` : '0px'
}

// 크기 토큰 가져오기
export function getSizingToken(path: string): string {
  const value = getTokenValue(`Guide_Tree_Test.${path}`)
  return value || 'auto'
}

        // CSS 변수로 토큰을 설정하는 함수
        export function setCSSVariables(): void {
          const root = document.documentElement

          // 색상 토큰들
          root.style.setProperty('--color-primary-base', getColorToken('primary.base'))
          root.style.setProperty('--color-primary-light10', getColorToken('primary.light10'))
          root.style.setProperty('--color-primary-dark10', getColorToken('primary.dark10'))
          root.style.setProperty('--color-primary-dark30', getColorToken('primary.dark30'))
          root.style.setProperty('--color-primary-dark60', getColorToken('primary.dark60'))
          root.style.setProperty('--color-primary-dark70', getColorToken('primary.dark70'))
          root.style.setProperty('--color-primary-dark80', getColorToken('primary.dark80'))
          
          root.style.setProperty('--color-secondary-base', getColorToken('secondary.base'))
          root.style.setProperty('--color-secondary-light10', getColorToken('secondary.light10'))
          root.style.setProperty('--color-secondary-dark10', getColorToken('secondary.dark10'))
          root.style.setProperty('--color-secondary-dark30', getColorToken('secondary.dark30'))
          root.style.setProperty('--color-secondary-dark60', getColorToken('secondary.dark60'))
          root.style.setProperty('--color-secondary-dark70', getColorToken('secondary.dark70'))
          root.style.setProperty('--color-secondary-dark80', getColorToken('secondary.dark80'))
          
          root.style.setProperty('--color-neut-10-ff', getColorToken('neut.10_ff'))
          root.style.setProperty('--color-neut-20-fa', getColorToken('neut.20_fa'))
          root.style.setProperty('--color-neut-30-ee', getColorToken('neut.30_ee'))
          root.style.setProperty('--color-neut-40-dd', getColorToken('neut.40_dd'))
          root.style.setProperty('--color-neut-50-cc', getColorToken('neut.50_cc'))
          root.style.setProperty('--color-neut-60-aa', getColorToken('neut.60_aa'))
          root.style.setProperty('--color-neut-70-99', getColorToken('neut.70_99'))
          root.style.setProperty('--color-neut-80-77', getColorToken('neut.80_77'))
          root.style.setProperty('--color-neut-90-66', getColorToken('neut.90_66'))
          root.style.setProperty('--color-neut-100-44', getColorToken('neut.100_44'))
          root.style.setProperty('--color-neut-110-1f', getColorToken('neut.110_1f'))

          // 폰트 패밀리
          root.style.setProperty('--font-family-fustat', getFontFamilyToken('Family_Fustat'))
          root.style.setProperty('--font-family-carter-one', getFontFamilyToken('Family_CarterOne'))

          // 폰트 크기
          root.style.setProperty('--font-size-head-16', getFontSizeToken('Head.16'))
          root.style.setProperty('--font-size-head-20', getFontSizeToken('Head.20'))
          root.style.setProperty('--font-size-head-24', getFontSizeToken('Head.24'))
          root.style.setProperty('--font-size-head-28', getFontSizeToken('Head.28'))
          root.style.setProperty('--font-size-head-32', getFontSizeToken('Head.32'))
          root.style.setProperty('--font-size-body-10', getFontSizeToken('Body.10'))
          root.style.setProperty('--font-size-body-12', getFontSizeToken('Body.12'))
          root.style.setProperty('--font-size-body-14', getFontSizeToken('Body.14'))

          // 폰트 웨이트
          root.style.setProperty('--font-weight-lt', getFontWeightToken('fustat.LT'))
          root.style.setProperty('--font-weight-sb', getFontWeightToken('fustat.SB'))
          root.style.setProperty('--font-weight-eb', getFontWeightToken('fustat.EB'))

          // 간격
          root.style.setProperty('--spacing-4', getSpacingToken('GAP_vertical_4'))
          root.style.setProperty('--spacing-6', getSpacingToken('GAP_hoizon_6'))
          root.style.setProperty('--spacing-8', getSpacingToken('input.Hoizon14'))
          root.style.setProperty('--spacing-12', getSpacingToken('Mobile_Horizon'))
          root.style.setProperty('--spacing-16', getSpacingToken('BTN.L_horizon'))
          root.style.setProperty('--spacing-20', getSpacingToken('input.vertical'))
          root.style.setProperty('--spacing-24', getSpacingToken('GAP28'))

          // 테두리 반경
          root.style.setProperty('--border-radius-4', getBorderRadiusToken('R4'))
          root.style.setProperty('--border-radius-6', getBorderRadiusToken('R4'))
          root.style.setProperty('--border-radius-10', getBorderRadiusToken('R10'))
          root.style.setProperty('--border-radius-20', getBorderRadiusToken('Categories'))
          root.style.setProperty('--border-radius-100', getBorderRadiusToken('full'))

          // 크기
          root.style.setProperty('--icon-size-16', getSizingToken('Icon.16'))
          root.style.setProperty('--icon-size-24', getSizingToken('Icon.24'))
          root.style.setProperty('--icon-size-32', getSizingToken('Icon.32'))
          root.style.setProperty('--icon-size-40', getSizingToken('Icon.40'))
          root.style.setProperty('--btn-height-small', getSizingToken('BTN.Small_hight'))
          root.style.setProperty('--btn-height-middle', getSizingToken('BTN.Middle_higt'))
          root.style.setProperty('--btn-height-large', getSizingToken('BTN.Large_hight'))
          root.style.setProperty('--column-width-2half', getSizingToken('Column.2half'))
        } 
<template>
  <footer class="py-8 border-t border-gray-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-secondary-text">
          {{ $t('footer.designedBy') }}
          <span class="font-semibold text-primary-text">{{ $t('footer.name') }}</span>
        </p>
        <p class="text-sm text-secondary-text">
          {{ $t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>
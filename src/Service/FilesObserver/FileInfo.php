<?php

declare(strict_types=1);

namespace Buggregator\Trap\Service\FilesObserver;

final class FileInfo
{
    public function __construct(
        public readonly string $path,
        public readonly int $size,
        public readonly int $ctime,
        public readonly int $mtime,
    ) {
    }

    public static function fromSplFileInfo(\SplFileInfo $fileInfo): self
    {
        return new self(
            $fileInfo->getPathname(),
            $fileInfo->getSize(),
            $fileInfo->getCTime(),
            $fileInfo->getMTime(),
        );
    }

    public function toArray(): array
    {
        return [
            'path' => $this->path,
            'size' => $this->size,
            'ctime' => $this->ctime,
            'mtime' => $this->mtime,
        ];
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['path'],
            $data['size'],
            $data['ctime'],
            $data['mtime'],
        );
    }
}

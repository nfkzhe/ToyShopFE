import React, { useState } from 'react';

const ProductDescription = ({ text = '', maxLines = 3 }) => {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text && text.split(' ').length > 15;

  return (
    <div>
      <p
        style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: expanded ? 'unset' : maxLines,
          lineHeight: '1.6',
          color: '#4a5568',
          whiteSpace: 'pre-line',
        }}
      >
        {text || 'Đang cập nhật mô tả...'}
      </p>
      {isLongText && (
        <button
          className="btn btn-link px-0"
          style={{ fontSize: 14 }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}
        </button>
      )}
    </div>
  );
};

export default ProductDescription;
